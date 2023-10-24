// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
const bcrypt = require('bcrypt');
const Busboy = require('busboy');
const path = require('path');
const os = require('os');
const fs = require('fs');


// Função que cria um novo favorito
async function createNota(request, response) {
    const { nota } = request.body;
    const { id } = request.params

    const query = "INSERT INTO avaliacoes (nota, usuario_id) VALUES (?, ?)";

    connection.query(query, [nota, id], (err, results) => {
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

async function updateNota(request, response) {
    const { nota } = request.body;
    const { id } = request.params;

    const query = 'UPDATE avaliacoes SET nota = CAST(? AS SIGNED) WHERE usuario_id = ?';

    connection.query(query, [nota, id], (err, results) => {
        if (err) {
            response.status(400).json({
                success: false,
                message: 'Ocorreu um erro. Não foi possível atualizar o usuário!',
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
        } else {
            response.status(200).json({
                success: true,
                message: 'Sucesso! Usuário atualizado.',
                data: results
            });
        }
    });
}



async function findNota(request, response) {
    const query = "SELECT nota FROM avaliacoes WHERE `usuario_id` = ?"; 
    const id = request.params.id

    connection.query(query, id, (err, results) => {
        try {
            if (err) {
                response.status(500).json({
                    success: false,
                    message: "Ocorreu um erro ao buscar a nota",
                    error: err
                });
                return;
            }

            if (results.length > 0) {
                const nota = results.map((result) => result.nota); 
                response.status(200).json({
                    success: true,
                    message: `Sucesso! nota encontrada`,
                    data: nota
                });
            } else {
                response.status(404).json({
                    success: false,
                    message: `Nenhuma nota encontrada.`
                });
            }
        } catch (e) {
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao buscar a nota",
                error: e
            });
        }
    });
}


module.exports = {
    createNota,
    findNota,
    updateNota
}