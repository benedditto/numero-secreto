const menorValor = 50;
const maiorValor = 5000;
const numeroSecreto = geraNumeroAleatorio();

function geraNumeroAleatorio(){
    return(parseInt(Math.random()* maiorValor + 1));
}

console.log('numero secreto: ' + numeroSecreto);

const elementoMenorValor =  document.getElementById('menor-valor');
elementoMenorValor.innerHTML=menorValor;

const elementoMaiorValor =  document.getElementById('maior-valor');
elementoMaiorValor.innerHTML=maiorValor;
