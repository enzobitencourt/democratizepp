// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { createFavorite } = require('../controllers/favoritosController');
const { deleteFavorite } = require('../controllers/favoritosController');
const { findFavorites } = require('../controllers/favoritosController');

router.post('/favorito/create', createFavorite);
router.get('/find', findFavorites);
router.delete('/favorito/delete/:id', deleteFavorite);

module.exports = router;