function contadorDeProdutosnoCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let contador = 0;
  carrinho.forEach((produto) => (contador += produto.quantidade));
  return contador;
}
function atualizarContadorDeProdutosNoCarrinho(){
    document.getElementById('carrinho-quantidade').textContent = contadorDeProdutosnoCarrinho();
}
document.getElementById("hamburguer").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("d-block");
});
document.addEventListener("DOMContentLoaded", function () {
  atualizarContadorDeProdutosNoCarrinho();
});
