function adicionarProdutoAoCarrinho(id, nome, imagem, preco) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let produtoExistente = carrinho.find((produto) => produto.id === id);
  if (produtoExistente) {
    produtoExistente.quantidade++;
  } else {
    let novoProduto = {
      id: id,
      nome: nome,
      imagem: imagem,
      preco: preco,
      quantidade: 1,
    };
    carrinho.push(novoProduto);
  }
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}
window
  .fetch("http://127.0.0.1:5500/projeto3/api/produtos.json")
  .then((resposta) => resposta.json())
  .then((produtos) => {
    //console.table(produtos);
    let html = "";
    produtos.forEach((produto) => {
      html += `
         <div class="border p-2">
            <div class="imagem d-flex justify-content-center align-items-center">
              <img src="./img/${produto.imagem}" alt="" class="img-fluid" />
            </div>
            <h3 class="mt-1">${produto.nome}</h3>
            <p class="mt-1">
              ${produto.descricao}
            </p>
            <div class="d-flex justify-content-between align-items-center mt-2">
              <span>
                R$
                <span class="text-success"> ${produto.preco.toFixed(2).replace(".", ",")} </span>
              </span>
              <button class="btn btn-success d-inline-block" onclick="adicionarProdutoAoCarrinho(${produto.id},'${produto.nome}','${produto.imagem}',${produto.preco})">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        `;
    });
    document.getElementById("home-produtos").innerHTML = html;
  });
