//EXEMPLO CONTROLLER
const { Aluno } = require("../models");
async function listar(req, res) {
try {
const alunos = await Aluno.findAll();
res.json(alunos);
} catch {
res.status(500).json({ erro: "Erro ao listar alunos" });
}
}
async function buscarPorId(req, res) {
try {
const aluno = await Aluno.findByPk(req.params.id);
if (!aluno) return res.status(404).json({ erro: "Aluno não encontrado" });
res.json(aluno);
} catch {
res.status(500).json({ erro: "Erro ao buscar aluno" });
}
}
async function criar(req, res) {
try {
const novo = await Aluno.create(req.body);
res.status(201).json(novo);
} catch {
res.status(500).json({ erro: "Erro ao criar aluno" });
}
}
async function atualizar(req, res) {
try {
const aluno = await Aluno.findByPk(req.params.id);
if (!aluno) return res.status(404).json({ erro: "Aluno não encontrado" });
await aluno.update(req.body);
res.json(aluno);
} catch {
res.status(500).json({ erro: "Erro ao atualizar aluno" });
}
}
async function excluir(req, res) {
try {
const aluno = await Aluno.findByPk(req.params.id);
if (!aluno) return res.status(404).json({ erro: "Aluno não encontrado" });
await aluno.destroy();
res.json({ mensagem: "Aluno removido com sucesso!" });
} catch {
res.status(500).json({ erro: "Erro ao excluir aluno" });
}
}
module.exports = { listar, buscarPorId, criar, atualizar,excluir};