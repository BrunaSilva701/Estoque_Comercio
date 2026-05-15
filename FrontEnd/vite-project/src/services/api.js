// import axios from 'axios';

// const api = axios.create({

//     baseURL: 'http://localhost:3000'

// });

// export default api;

const API_URL = "http://localhost:3000/produtos";

export async function listarProdutos() {
    const response = await fetch(API_URL);
    return response.json();
}

export async function criarProduto(produto) {
    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
    });
}

export async function deletarProduto(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
}