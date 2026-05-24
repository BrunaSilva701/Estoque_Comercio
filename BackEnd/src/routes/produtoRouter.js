const { Router } = require('express');
const ProdutoController = require('../controllers/produtoController'); 

const router = Router();

// Definição dos endpoints
router.get('/produtos', ProdutoController.listar);
router.get('/produtos/:id', ProdutoController.buscar);
router.post('/produtos', ProdutoController.criar);
router.put('/produtos/:id', ProdutoController.atualizar);
router.delete('/produtos/:id', ProdutoController.deletar);

module.exports = router;
