// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();
// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');
// Importar pacote que implementa o protocolo JSON Web Token
const jwt = require('jsonwebtoken');

// Authentication
async function login(request, response) {
    // Preparar o comando de execução no banco
    const query = "SELECT * FROM usuarios WHERE `email` = ?";

    // Recuperar credenciais informadas
    const params = [request.body.email]; // Usar [] em vez de Array()

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        if (err) {
            response.status(500).json({
                success: false,
                message: "Erro no servidor",
                error: err.message
            });
        } else {
            if (results.length > 0) {
                bcrypt.compare(request.body.senha, results[0].senha, (bcryptErr, bcryptResult) => {
                    if (bcryptErr) {
                        // Erro ao comparar senhas
                        response.status(500).json({
                            success: false,
                            message: 'Erro no servidor ao verificar a senha',
                            error: bcryptErr.message
                        });
                    } else {
                        if (bcryptResult) {
                            const id = results[0].id;
                            const token = jwt.sign({ userId: id }, 'the-super-strong-secret', { expiresIn: 300 });
                            response.status(200).json({
                                success: true,
                                message: `Sucesso! Usuário conectado.`,
                                token: token,
                                data: results
                            });
                        } else {
                            // Senha incorreta
                            response.status(401).json({
                                success: false,
                                message: 'Email ou senha incorretos'
                            });
                        }
                    }
                });
            } else {
                // Usuário não encontrado
                response.status(404).json({
                    success: false,
                    message: 'Usuário não encontrado'
                });
            }
        }
    });
}


module.exports = {
    login
}