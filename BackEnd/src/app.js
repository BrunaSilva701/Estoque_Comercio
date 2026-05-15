const express = require('express');
const cors = require('cors'); // Adicione isso
const routes = require('./routes/produtoRouter');

const app = express();

app.use(cors()); // Ative o CORS aqui
app.use(express.json());
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});