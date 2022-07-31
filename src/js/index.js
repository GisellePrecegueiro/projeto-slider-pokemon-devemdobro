/* 1-Quando clicar na seta de avançar, mostrar o próximo cartão da lista 
    -passo 1 - pegar o elemento HTML da seta avançar*
    -passo 2 - identificar o clique o usuário na seta avançar
    -passo 3 - fazer aparecer o próximo cartão da lista
    -passo 4 - buscar o cartão que esta selecionado e esconder ele
    
2- Quando climar na seta de voltar, tem que esconder a carta anterior da lista
    -passo 1 - pegar o elemento HTML da seta voltat
    -passo 2 - identificar o clique do usuario na seta voltar
    -passo 3 - fazer aparecer o cartão anterior
    -passo 4 - buscar o cartão que esta selecionado e esconder ele
    

    -Objetivo 1 - avançar*/

    const btnAvancar = document.getElementById('btn-avancar');
    const btnVoltar = document.getElementById('btn-voltar');
    const cartoes = document.querySelectorAll('.cartao');
    let cartaoAtual = 0;

    function esconderCartaoSelecionado(){
        const cartaoSelecionado = document.querySelector('.selecionado');
        cartaoSelecionado.classList.remove('selecionado');
    }

    function mostrarCartao(indiceCartao){
        cartoes[indiceCartao].classList.add('selecionado');
    }
    
    btnAvancar.addEventListener('click', function (){
        if(cartaoAtual === cartoes.length - 1) return;

        esconderCartaoSelecionado();

        cartaoAtual++;
        mostrarCartao(cartaoAtual);
        
    });

    /*-Objetivo 2 - voltar*/

    btnVoltar.addEventListener('click', function (){

        if(cartaoAtual === 0) return;

        esconderCartaoSelecionado();

        cartaoAtual--;
        mostrarCartao(cartaoAtual);

    });
