const imagem = document.querySelector('#imagem')
//imagem.src = 'imagens/água.jpg'
const palavra = document.querySelector('.palavra')
//palavra.textContent = 'ok'
const resposta1 = document.querySelector('.resposta1')
//resposta1.textContent = 'ok'
const resposta2 = document.querySelector('.resposta2')
//resposta2.textContent = 'ok'
let i = 0
const btnProxima = document.querySelector('.btnProxima')
//btnProxima.textContent = 'ok'
const mensagem  = document.querySelector('.mensagem')
//mensagem.textContent = 'ok'


const conjImagens = ['imagens/água.jpg', 'imagens/régua.jpg', 'imagens/bigode.png']
const conjPalavras = ['Á___A', 'RÉ___A', 'BI___ODE']
const conjRespostas = [['G', 'GU']]
const conjPalavrasCompletas = ['ÁGUA', 'RÉGUA', 'BIGODE']

imagem.src = conjImagens[i]
palavra.textContent = conjPalavras[i]

function proxima() {
    //btnProxima.textContent = 'ok'
   if (i <= conjImagens.length - 2) {
      i++
      imagem.src = conjImagens[i]
      palavra.textContent = conjPalavras[i]
   } else {
    i=0
    imagem.src = conjImagens[i]
    palavra.textContent = conjPalavras[i]
   }
   mensagem.textContent = 'Clique na resposta correta!'
}

function confere() {
switch (i) {
    case 0:
        if (this.textContent == 'GU') {
            mensagem.textContent = 'Parabéns, você acertou!'
            palavra.textContent = conjPalavrasCompletas[i]
        } else {
            mensagem.textContent = 'Tente novamente!'
            palavra.textContent = conjPalavras[i]
        }
        break;
    case 1:
        if (this.textContent == 'GU') {
            mensagem.textContent = 'Parabéns, você acertou!'
            palavra.textContent = conjPalavrasCompletas[i]

        } else {
            mensagem.textContent = 'Tente novamente!'
            palavra.textContent = conjPalavras[i]

        }
        break;
    case 2:
        if (this.textContent == 'G') {
            mensagem.textContent = 'Parabéns, você acertou!'
            palavra.textContent = conjPalavrasCompletas[i]

        } else {
            mensagem.textContent = 'Tente novamente!'
            palavra.textContent = conjPalavras[i]

        }
        break;
    default:
        break;
}
}
btnProxima.addEventListener('click', proxima)
resposta1.addEventListener('click', confere)
resposta2.addEventListener('click', confere)