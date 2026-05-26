// Detecta se a página foi aberta via Live Server (5501) ou direto pelo Node (3000)
const API_URL = window.location.port === '5501' ? 'http://localhost:3000/produtos' : '/produtos';

document.addEventListener('DOMContentLoaded', carregarProdutos);

// 1. LISTAR PRODUTOS (GET)
async function carregarProdutos() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Erro ao buscar dados do servidor');
        const produtos = await response.json();
        renderizarTabela(produtos);
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

function renderizarTabela(produtos) {
    const tabela = document.getElementById('tabelaProdutos');
    tabela.innerHTML = ''; 

    produtos.forEach(produto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${produto.id}</td>
            <td>${produto.descricao}</td>
            <td>${produto.marca}</td>
            <td>${produto.cor}</td>
            <td>${produto.quantidade}</td>
             <td>${produto.preco}</td>
            <td>
                <button class="btn-editar" onclick="abrirEdicao('${produto.id}', '${produto.descricao}', ${produto.quantidade})">Editar</button>
                <button class="btn-apagar" onclick="deletarProduto('${produto.id}')">Apagar</button>
            </td>
        `;
        tabela.appendChild(tr);
    });
}

// 2. CADASTRAR PRODUTO (POST)
async function cadastrarProduto(event) {
    event.preventDefault();
    const descricao = document.getElementById('descricao').value.trim();
    const marca = document.getElementById('marca').value.trim();
    const cor = document.getElementById('cor').value.trim();
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preco').value;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ descricao, marca, cor, quantidade: parseInt(quantidade, 10), preco: parseFloat(preco) })
        });
        
        if (response.ok) {
            document.getElementById('formProduto').reset();
            carregarProdutos();
        } else {
            alert('Erro ao cadastrar produto.');
        }
    } catch (error) {
        console.error('Erro no cadastro:', error);
    }
}

// 3. CONTROLAR SEÇÕES (EDITAR / CADASTRAR)
function abrirEdicao(id, descricao, marca, cor, quantidade, preco) {
    document.getElementById('secaoEditar').style.display = 'block';
    document.getElementById('secaoCadastrar').style.display = 'none';

    document.getElementById('edit-id').value = id;
    document.getElementById('edit-id-label').innerText = id;
    document.getElementById('edit-descricao').value = descricao;
    document.getElementById('edit-marca').value = marca;
    document.getElementById('edit-cor').value = cor;
    document.getElementById('edit-quantidade').value = quantidade;
    document.getElementById('edit-preco').value = preco;
}

function fecharEdicao() {
    document.getElementById('secaoEditar').style.display = 'none';
    document.getElementById('secaoCadastrar').style.display = 'block';
    document.getElementById('formEditarProduto').reset();
}

// 4. SALVAR ALTERAÇÕES (PUT)
async function salvarEdicao(event) {
    event.preventDefault();
    const id = document.getElementById('edit-id').value;
    const descricao = document.getElementById('edit-descricao').value.trim();
    const marca = document.getElementById('edit-marca').value.trim();
    const cor = document.getElementById('edit-cor').value.trim();
    const quantidade = document.getElementById('edit-quantidade').value;
    const preco = document.getElementById('edit-preco').value;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ descricao, marca, cor, quantidade: parseInt(quantidade, 10), preco: parseFloat(preco) })
        });
        
        if (response.ok) {
            fecharEdicao();
            carregarProdutos();
        } else {
            alert('Erro ao atualizar produto.');
        }
    } catch (error) {
        console.error('Erro na edição:', error);
    }
}

// 5. APAGAR PRODUTO (DELETE)
async function deletarProduto(id) {
    if (confirm(`Deseja apagar o produto com ID ${id}?`)) {
        try {
            const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (response.ok) {
                carregarProdutos();
            } else {
                alert('Erro ao excluir produto.');
            }
        } catch (error) {
            console.error('Erro na exclusão:', error);
        }
    }
}

// 6. BUSCA
async function buscarProduto() {
    const termo = document.getElementById('inputBusca').value.trim();
    if (!termo) {
        carregarProdutos();
        return;
    }
    try {
        const response = await fetch(`${API_URL}?busca=${termo}`);
        if (response.ok) {
            const produtos = await response.json();
            renderizarTabela(Array.isArray(produtos) ? produtos : [produtos]);
        }
    } catch (error) {
        console.error('Erro na busca:', error);
    }
}

function limparBusca() {
    document.getElementById('inputBusca').value = '';
    carregarProdutos();
}
