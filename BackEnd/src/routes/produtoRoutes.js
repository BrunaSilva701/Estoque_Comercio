const { Router } = require('express');
const ProdutoController = require('../controllers/produtoController'); 

const routes = Router();

// Definição das rotas
routes.get('/produtos', ProdutoController.listar);
routes.get('/produtos/:id', ProdutoController.buscar);
routes.post('/produtos', ProdutoController.criar);
routes.put('/produtos/:id', ProdutoController.atualizar);
routes.delete('/produtos/:id', ProdutoController.deletar);

module.exports = routes;
