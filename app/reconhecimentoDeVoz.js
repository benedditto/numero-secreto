const elementoChute = document.getElementById('chute'); //onde será exibido o chute dado pelo usuário
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

//agora precisamos de uma instância para poder utilizar essa API

const recognition = new SpeechRecognition();

//agora vamos começar o reconhecimento de voz
//configurar o idioma
recognition.lang = 'pt-Br';
recognition.start(); //liga o microfone

//para capturar o que o usuário fala

recognition.addEventListener('result', onSpeak) //fica ouvindo eventos do microfone

function onSpeak(e){ //e --> evento que ocorre
   //console.log(e.results[0][0].transcript);
   chute = e.results[0][0].transcript; //chute = variável que recebe a fala do usuário
   //remover o ponto final
   chute = chute.replace('.','');
    exibeChuteNaTela(chute);
    //agora temos que verificar se o que foi pronunciado é um valor válido
    verificaSeOChutePossuiUmValorValido(chute); //foi criado um novo arquivo js para colocar todas as funções de validações - validacao.js
}


function exibeChuteNaTela(chute){
    //essa função irá exibir o número pronunciado na página.
    //Para escrever em um elemento HTML. Abriu crases "``"
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

/*  para que o jogo não acabe na primeira pronúncia, isto é, não desligue 
    o microfone, e que só acabe quando acertarem o número.
    O que a função abaixo faz é iniciar novamente o microfone, 
    quando o reconhecimento de voz acabar.
*/

recognition.addEventListener('end', () => recognition.start())

