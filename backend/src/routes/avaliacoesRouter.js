// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { createNota } = require('../controllers/avaliacoesController');
const { findNota } = require('../controllers/avaliacoesController');
const { updateNota } = require('../controllers/avaliacoesController');

router.post('/avaliacao/create/:id', createNota);
router.get('/avaliacao/:id', findNota);
router.put('/avaliacao/:id', updateNota)

module.exports = router;