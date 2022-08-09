const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

function esconderCartaSelecionada(){
    cartoes[cartaoAtual].classList.remove('selecionado');
}

function mostrarCartaProxima(direcao){
    cartoes[cartaoAtual+direcao].classList.add('selecionado');
}


const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

btnAvancar.addEventListener('click', function () {
     if (cartaoAtual >= 0 && cartaoAtual <= 3){
        if (cartaoAtual < 2){
            esconderCartaSelecionada();
            mostrarCartaProxima(1);
            cartaoAtual++;
        }
     }
})

btnVoltar.addEventListener('click', function () {
    if (cartaoAtual >= 0 && cartaoAtual <= 3){
        if(cartaoAtual > 0){
            esconderCartaSelecionada();
            mostrarCartaProxima(-1);
            cartaoAtual--;
        }
    }
})