import { useEffect, useState } from "react";
import ProdutoCard from "../components/ProdutoCard";
import {
    listarProdutos,
    criarProduto,
    deletarProduto
} from "../services/api";

function Produtos() {
    const [produtos, setProdutos] = useState([]);

    const [form, setForm] = useState({
        descricao: "",
        preco: "",
        marca: "",
        cor: "",
        quantidade: ""
    });

    async function carregarProdutos() {
        const dados = await listarProdutos();
        setProdutos(dados);
    }

    useEffect(() => {
        carregarProdutos();
    }, []);

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        await criarProduto(form);

        setForm({
            descricao: "",
            preco: "",
            marca: "",
            cor: "",
            quantidade: ""
        });

        carregarProdutos();
    }

    async function handleDelete(id) {
        await deletarProduto(id);
        carregarProdutos();
    }

    return (
        <div className="container">
            <h1>📦 Cadastro de Produtos</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="descricao"
                    placeholder="Descrição"
                    value={form.descricao}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="preco"
                    placeholder="Preço"
                    step="0.01"
                    value={form.preco}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="marca"
                    placeholder="Marca"
                    value={form.marca}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="cor"
                    placeholder="Cor"
                    value={form.cor}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="quantidade"
                    placeholder="Quantidade"
                    value={form.quantidade}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Salvar Produto</button>
            </form>

            <h2>Produtos em Estoque</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Qtd</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    {produtos.map((produto) => (
                        <ProdutoCard
                            key={produto.id}
                            produto={produto}
                            onDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Produtos;