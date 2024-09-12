let total = 0;
let carrinho = document.getElementById('carrinho');
let totalDisplay = document.getElementById('total');

function obterDados() {
   
    let fruta = document.getElementById('fruta');
    let frutaSelecionada = fruta.options[fruta.selectedIndex].text;
    let preco = parseFloat(fruta.value);
    let quantidade = parseInt(document.getElementById('quantidade').value);

   
    let precoTotal = preco * quantidade;

   
    atualizarCarrinho(frutaSelecionada, quantidade, precoTotal);
    atualizarTotal(precoTotal);
}

function atualizarCarrinho(frutaSelecionada, quantidade, precoTotal) {
   
    let item = document.createElement('li');
    item.textContent = `${quantidade}x ${frutaSelecionada.split(' - ')[0]} - R$${precoTotal.toFixed(2)}`;
   
 
    carrinho.appendChild(item);
}

function atualizarTotal(precoTotal) {
   
    total += precoTotal;
   
   
    totalDisplay.textContent = `R$${total.toFixed(2)}`;
}

function limparCarrinho() {
    carrinho.innerHTML = '';  
    total = 0;              
    totalDisplay.textContent = `R$${total.toFixed(2)}`;  
}

function irParaPagamento() {
   
    localStorage.setItem('carrinho', carrinho.innerHTML);
    localStorage.setItem('total', total.toFixed(2));
   
   
    window.location.href = "pagamento.html";
}

function irParaPagamento() {
    localStorage.setItem('carrinho', carrinho.innerHTML);
    localStorage.setItem('total', total.toFixed(2));
    window.location.href = "pagamento.html";
}

function carregarPagamento() {
    if (document.getElementById('resumoCarrinho')) {
        let resumoCarrinho = localStorage.getItem('carrinho');
        let totalPagar = localStorage.getItem('total');

        document.getElementById('resumoCarrinho').innerHTML = resumoCarrinho;
        document.getElementById('totalPagar').textContent = `R$${totalPagar}`;
    }
}

function processarPagamento() {
    let metodoPagamento = document.getElementById('metodoPagamento').value;
    alert(`Pagamento de R$${localStorage.getItem('total')} realizado com sucesso usando ${metodoPagamento}!`);
    window.location.href = "confimation.html";
}

window.onload = carregarPagamento;

function limparInformacoes() {
    document.getElementById('numeroCartao').value = '';
    document.getElementById('senhaCartao').value = '';
}
