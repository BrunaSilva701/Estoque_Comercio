const { Produto } = require('../models');
const { Op } = require('sequelize');
const { formatId } = require('../utils/idFormatter');

module.exports = {
  // Listar todos os produtos
  async listar(req, res) {
  try {
    const { busca } = req.query;
    
const where = busca
  ? {
      [Op.or]: [
        { descricao: { [Op.like]: `%${busca}%` } },
        { cor: { [Op.like]: `%${busca}%` } },
        { marca: { [Op.like]: `%${busca}%` } },
        { id: !isNaN(busca) ? Number(busca) : null }
      ]
    }
  : {};

    const produtos = await Produto.findAll({ where, order: [['id', 'ASC']] });

    const produtosFormatados = produtos.map(produto => ({
      ...produto.toJSON(),
      id: formatId(produto.id)
    }));

    return res.status(200).json(produtosFormatados);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar produtos.' });
  }
},
  // Buscar um produto pelo ID
  async buscar(req, res) {
    try {
      const { id } = req.params;
      const produto = await Produto.findByPk(id);

      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
      }

      return res.status(200).json({...produto.toJSON(), id: formatId(produto.id) });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar o produto.' });
    }
  },

  // Criar um novo produto
async criar(req, res) {
  try {
    const { descricao, preco, marca, cor, quantidade } = req.body;

    // Validação para garantir que todos os campos foram preenchidos
    if (!descricao || !preco || !marca || !cor || !quantidade) {
      return res.status(400).json({ 
        error: 'Todos os campos (descrição, preço, marca, cor e quantidade) são obrigatórios.' 
      });
    }

    if (preco <= 0 || quantidade <0){
      return res.status(400).json({error: 'Preço e quantidade devem ser maiores que 0'})
    }

    const produto = await Produto.create({ descricao, preco, marca, cor, quantidade });
    return res.status(201).json({...produto.toJSON(), id: formatId(produto.id) });
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

      return res.status(200).json({...produto.toJSON(), id: formatId(produto.id) });
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
