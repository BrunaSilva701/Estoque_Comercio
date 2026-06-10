const express = require('express');
const cors = require('cors');
const path = require('path');

// Caminho corrigido: como app.js e routes estão na mesma pasta 'src'
const routes = require('./routes/produtoRoutes'); 

const app = express();

// Libera o CORS para o Live Server (porta 5501) conseguir conversar com o Node
app.use(cors());

// Configura o Express para entender JSON no corpo das requisições (importante para os botões!)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve a pasta FrontEnd como arquivos estáticos
app.use(express.static(path.join(__dirname, '..', '..', 'FrontEnd')));

// Ativa as rotas do seu projeto
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});