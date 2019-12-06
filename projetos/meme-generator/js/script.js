const divTextoBaixo = window.document.querySelector('.texto-baixo');
const carregarTexto = window.document.querySelector('.caixa-texto-input');
const recebeTexto = window.document.createElement('p');
recebeTexto.classList += 'texto-meme-baixo';
divTextoBaixo.appendChild(recebeTexto);

function loadText() {
  recebeTexto.innerHTML = carregarTexto.value;
}

carregarTexto.addEventListener('keyup', loadText);

const recebeFoto = window.document.getElementById('img-foto');
const botaoFoto = window.document.getElementById('botao-foto');

function loadImage(event) {
  recebeFoto.src = window.URL.createObjectURL(event.target.files[0]);
}

botaoFoto.addEventListener('change', loadImage);
