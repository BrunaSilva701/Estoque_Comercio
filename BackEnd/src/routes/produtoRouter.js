const { Router } = require('express');
const ProdutoController = require('../controllers/produtoController'); 

const router = Router();

// Definição dos endpoints
router.get('/produtos', ProdutoController.index);
router.get('/produtos/:id', ProdutoController.show);
router.post('/produtos', ProdutoController.store);
router.put('/produtos/:id', ProdutoController.update);
router.delete('/produtos/:id', ProdutoController.delete);

module.exports = router;