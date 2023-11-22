// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
const bcrypt = require('bcrypt');
const Busboy = require('busboy');
const path = require('path');
const os = require('os');
const fs = require('fs');


// Função que cria um novo favorito
async function createFavorite(request, response) {
    const { nome, cargo, imagem, idEleito, idUsuario, url } = request.body;

    const idUsuarioInt = parseInt(idUsuario, 10);

    const query = "INSERT INTO favoritos (nome, cargo, imagem, idUsuario, idEleito, url) VALUES (?, ?, ?, ?, ?, ?)";

    connection.query(query, [nome, cargo, imagem, idUsuarioInt, idEleito, url], (err, results) => {
        if (err) {
            response.status(400).json({
                success: false,
                message: "Não foi possível realizar a operação. Verifique os dados informados.",
            });
        } else {
            response.status(200).json({
                success: true,
                message: "Operação realizada com sucesso.",
            });
        }
    });
}


// Função que remove usuário no banco
async function deleteFavorite(request, response) {
    // Preparar o comando de execução no banco
    const query = "DELETE FROM favoritos WHERE `idEleito` = ?";

    // Recebimento de parametro da rota
    const params = Array(
        request.params.id
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Favorito deletado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível deletar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

async function findFavorites(request, response) {
    const query = "SELECT idEleito FROM favoritos WHERE `idUsuario` = ?"; 
    const id = request.params.id

    connection.query(query, id, (err, results) => {
        try {
            if (err) {
                response.status(500).json({
                    success: false,
                    message: "Ocorreu um erro ao buscar os favoritos.",
                    error: err
                });
                return;
            }

            if (results.length > 0) {
                const idEleitos = results.map((result) => result.idEleito); // Extrai os idEleito
                response.status(200).json({
                    success: true,
                    message: `Sucesso! Favoritos encontrados`,
                    data: idEleitos
                });
            } else {
                response.status(404).json({
                    success: false,
                    message: `Nenhum favorito encontrado.`
                });
            }
        } catch (e) {
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao buscar os favoritos.",
                error: e
            });
        }
    });
}

async function listFavorites(request, response) {
    const query = 'SELECT * FROM favoritos WHERE `idUsuario` = ?'
    const id = request.params.id

    connection.query(query, id, (err, results) => { 
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de favoritos com sucesso',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os favoritos.`,
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


module.exports = {
    createFavorite,
    deleteFavorite,
    findFavorites,
    listFavorites
}