document.addEventListener("DOMContentLoaded", () => {
  let carrinho = JSON.parse(localStorage.getItem("carrinho"));
  //console.log(carrinho);
  let html = "";
  carrinho.forEach((produto) => {
    //console.log(produto);
    html += `
                <tr>
              <td class="d-flex align-items-center column-gap-2">
                <img src="./img/${produto.imagem}" alt="" style="max-width: 75px; max-height: 75px;">
                <span>
                  ${produto.nome}
                </span>
              </td>
              <td class="text-center">
                <button class="btn btn-light">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <button class="btn btn-light">
                  ${produto.quantidade}
                </button>
                <button class="btn btn-light">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </td>
              <td class="text-center">
                R$ ${(produto.preco).toFixed(2).replace('.',',')}
              </td>
              <td class="text-center">
                R$ ${(produto.preco*produto.quantidade).toFixed(2).replace('.',',')}
              </td>
              <td class="text-center">
                <button class="btn btn-warning">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </td>
            </tr>
    `;
  });
  document.getElementById("corpo-carrinho").innerHTML = html;
});
