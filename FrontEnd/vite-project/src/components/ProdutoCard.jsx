function ProdutoCard({ produto, onDelete }) {
    return (
        <tr>
            <td>{produto.id}</td>
            <td>{produto.descricao}</td>
            <td>R$ {produto.preco}</td>
            <td>{produto.quantidade}</td>
            <td>
                <button
                    className="btn-del"
                    onClick={() => onDelete(produto.id)}
                >
                    Remover
                </button>
            </td>
        </tr>
    );
}

export default ProdutoCard;