function verificaSeOChutePossuiUmValorValido(chute){
    //transformar a string "chute" em um valor inteiro - 
    // colocando o sinal de mais (+) já basta para transformar em inteiro
    const numero = +chute;

    if (Number.isNaN(numero)){
       // console.log('valor inválido');
       //para exibir a mensagem na página HTML, logo abaixo do valor pronunciado
       elementoChute.innerHTML += `<div> Valor inválido</div>`;
       return;
    }
    //verificar se o número está dentro do intervalo
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        //console.log(`Valor inválido. O número deve estar entre ${menorValor} e ${maiorValor}`);
        //para exibir a mensagem na página HTML, logo abaixo do valor pronunciado
        elementoChute.innerHTML +=`<div>Valor inválido. Diga um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    //se ACERTAR o número secreto
    if (numero === numeroSecreto){
        //alteramos o conteúdo da página
        // e adicionamos um botão para iniciar o jogo novamente
        document.body.innerHTML=`
            <h2>Você acertou!!! </h2>
            <h3>O número secreto era ${numeroSecreto} </h3>
            <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente </button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é MENOR <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é MAIOR <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero >maiorValor || numero < menorValor
}

/* para que ao clicarmos (evento e) no botão "jogar novamente" 
o jogo seja reiniciado, sem precisar atualizar a página
*/

document.body.addEventListener('click', e => {
    //para acessarmos o botão
    if(e.target.id =='jogar-novamente'){
        //atualiza a página para começar o jogo novamente
        window.location.reload();
    }
})
