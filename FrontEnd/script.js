const api = "http://localhost:3000/produtos";

async function listar() {
    const res = await fetch(api);
    const dados = await res.json();
    const corpo = document.getElementById('lista-produtos');
    corpo.innerHTML = dados.map(p => `
        <tr>
            <td>${p.id}</td>
            <td>${p.descricao}</td>
            <td>R$ ${p.preco}</td>
            <td>${p.quantidade}</td>
            <td><button class="btn-del" onclick="deletar(${p.id})">Remover</button></td>
        </tr>
    `).join('');
}

document.getElementById('form-produto').onsubmit = async (e) => {
    e.preventDefault();
    const produto = {
        descricao: document.getElementById('descricao').value,
        preco: document.getElementById('preco').value,
        marca: document.getElementById('marca').value,
        cor: document.getElementById('cor').value,
        quantidade: document.getElementById('quantidade').value
    };
    await fetch(api, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(produto)
    });
    e.target.reset();
    listar();
};

async function deletar(id) {
    await fetch(`${api}/${id}`, { method: 'DELETE' });
    listar();
}

listar();