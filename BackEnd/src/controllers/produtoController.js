const { Produto } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  // Listar todos os produtos
  async listar(req, res) {
  try {
    const { busca } = req.query;
    const where = busca
      ? {
          descricao: {
            [Op.like]: `%${busca}%`
          }
        }
      : {};
    const produtos = await Produto.findAll({ where });

    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar produtos.' });
  }
}
  // Buscar um produto pelo ID
  async buscar(req, res) {
    try {
      const { id } = req.params;
      const produto = await Produto.findByPk(id);

      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
      }

      return res.status(200).json(produto);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar o produto.' });
    }
  },

  // Criar um novo produto
  async criar(req, res) {
    try {
      const { descricao, preco, marca, cor, quantidade } = req.body;
      const produto = await Produto.create({ descricao, preco, marca, cor, quantidade });
      
      return res.status(201).json(produto);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar produto. Verifique os dados.' });
    }
  },

  // Atualizar um produto existente
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { descricao, preco, marca, cor, quantidade } = req.body;

      const produto = await Produto.findByPk(id);

      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
      }

      await produto.update({ descricao, preco, marca, cor, quantidade });

      return res.status(200).json(produto);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar produto.' });
    }
  },

  // Excluir um produto
  async deletar(req, res) {
    try {
      const { id } = req.params;
      const produto = await Produto.findByPk(id);

      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
      }

      await produto.destroy();

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar produto.' });
    }
  }
};
