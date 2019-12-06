const containerPaleta = document.querySelector('.grid-paleta');
const selecionada = document.querySelector('.selecionada');
const containerCaixa = document.querySelector('.conjunto-pixels');
const limpaTudo = document.querySelector('.borracha');
let corAtual = 'black';
let itemPixel;
let evento;
/* Escolhendo a cor */

function selecionaCor(event) {
  selecionada.className = `paleta ${event.target.classList[1]}`;
  corAtual = event.target.classList[1];
}

function paletaLoop(itemPaleta) {
  itemPaleta.addEventListener('click', selecionaCor);
}

containerPaleta.querySelectorAll('div').forEach(paletaLoop);

/* Pintando as caixas */

function trocaClassCaixa(event) {
  evento = event;
  evento.target.className = `pixels ${corAtual}`;
}

function pintarCaixa(itemPixels) {
  itemPixel = itemPixels;
  itemPixel.addEventListener('click', trocaClassCaixa);
}

containerCaixa.querySelectorAll('div').forEach(pintarCaixa);

/* Botão apaga tudo */

function limparCaixa(itemPixels) {
  itemPixel = itemPixels;
  itemPixel.className = 'pixels white';
  selecionada.className = 'paleta selecionada black';
  corAtual = 'black';
}

function botaoLimpaTudo() {
  containerCaixa.querySelectorAll('div').forEach(limparCaixa);
}

limpaTudo.addEventListener('click', botaoLimpaTudo);
