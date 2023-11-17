// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
const bcrypt = require('bcrypt');
const Busboy = require('busboy');
const path = require('path');
const os = require('os');
const fs = require('fs');

// Função que retorna todos usuários no banco de dados
async function listUsers(request, response) {
    // Preparar o comando de execução no banco
    connection.query('SELECT * FROM usuarios', (err, results) => { 
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de usuarios com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os usuários.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}

// Função que cria um novo usuário 
async function storeUser(request, response) {
    const { nome, email, senha } = request.body;

    const query = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";

    connection.query(query, [nome, email, bcrypt.hashSync(senha, 10)], (err, results) => {
        try {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    response.status(400).json({
                        success: false,
                        message: "O email já existe. Escolha outro email.",
                        query: query,
                        sqlMessage: err.sqlMessage
                    });
                } else {
                    response.status(400).json({
                        success: false,
                        message: "Não foi possível realizar o cadastro. Verifique os dados informados",
                        query: query,
                        sqlMessage: err.sqlMessage
                    });
                }
            } else {
                response.status(201).json({
                    success: true,
                    message: "Sucesso! Usuário cadastrado.",
                    data: results
                });
            }
        } catch (e) {
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível cadastrar o usuário!",
                query: query,
                sqlMessage: err.sqlMessage
            });
        }
    });
}


// Função que atualiza o usuário no banco
async function updateUser(request, response) {
    const userId = request.params.id;
    const userData = request.body;
    const updateFields = [];

    if (userData.nome) {
        updateFields.push('`nome` = ?');
    }
    if (userData.senha) {
        updateFields.push('`senha` = ?');
        userData.senha = bcrypt.hashSync(userData.senha, 10);
    }
    if (userData.imagem) {
        updateFields.push('`imagem` = ?');
    }

    if (updateFields.length === 0) {
        response.status(400).json({
            success: false,
            message: "Nenhum campo para atualizar foi fornecido."
        });
        return;
    }

    const query = `UPDATE usuarios SET ${updateFields.join(', ')} WHERE id = ?`;
    const params = [...Object.values(userData), userId];

    connection.query(query, params, (err, results) => {
        if (err) {
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível atualizar o usuário!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
        } else {
            response.status(200).json({
                success: true,
                message: "Sucesso! Usuário atualizado.",
                data: results
            });
        }
    });
}


// Função que remove usuário no banco
async function deleteUser(request, response) {
    const userId = request.params.id;

    // Iniciar a transação
    connection.beginTransaction(async function (err) {
        if (err) {
            response.status(500).json({
                success: false,
                message: "Erro ao iniciar transação",
                error: err
            });
            return;
        }

        try {
            // Consultar e excluir registros associados em outras tabelas
            await executeQuery("DELETE FROM avaliacoes WHERE `usuario_id` = ?", [userId]);
            await executeQuery("DELETE FROM favoritos WHERE `idUsuario` = ?", [userId]);
            // Adicione mais consultas conforme necessário para outras tabelas

            // Excluir o usuário da tabela principal
            const mainDeleteQuery = "DELETE FROM usuarios WHERE `id` = ?";
            const mainResult = await executeQuery(mainDeleteQuery, [userId]);

            // Commit a transação se todas as consultas foram bem-sucedidas
            connection.commit(function (err) {
                if (err) {
                    return connection.rollback(function () {
                        response.status(500).json({
                            success: false,
                            message: "Erro ao commitar transação",
                            error: err
                        });
                    });
                }

                response.status(200).json({
                    success: true,
                    message: `Sucesso! Usuário e registros associados deletados.`,
                    data: {
                        mainResult
                        // Adicione mais resultados conforme necessário
                    }
                });
            });
        } catch (error) {
            // Rollback da transação em caso de erro
            connection.rollback(function () {
                response.status(500).json({
                    success: false,
                    message: "Erro ao executar exclusão em cascata",
                    error
                });
            });
        }
    });
}

// Função utilitária para executar consultas
function executeQuery(query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}


module.exports = {
    listUsers,
    storeUser,
    updateUser,
    deleteUser
}