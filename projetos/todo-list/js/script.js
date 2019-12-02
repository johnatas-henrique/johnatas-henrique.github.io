const criarTarefa = document.querySelector('.criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
const listaOrdenada = document.querySelector('ol');
const botaoApagarRiscadas = document.querySelector('.apagar-riscadas');
const botaoApagarSelecionada = document.querySelector('.apagar-selecionada');
const botaoApagarTudo = document.querySelector('.apagar-tudo');
let buscaClasse;

/* Selecionar tarefa - single-click */

function selecionaTarefa(event) {
  const tamLista = listaOrdenada.querySelectorAll('li').length;
  for (let i = 0; i < tamLista; i += 1) {
    listaOrdenada.querySelectorAll('li')[i].classList.remove('tarefa-selecionada');
  }
  const evento = event;
  evento.target.classList += ' tarefa-selecionada';
}

function singleClickTarefa(item) {
  item.addEventListener('click', selecionaTarefa);
}

/* Riscar tarefa double-click */

function riscaTarefa(event) {
  const listaTodasClasses = event.target.className;
  const buscaRisco = listaTodasClasses.indexOf('tarefa-riscada');
  const evento = event;
  if (buscaRisco !== -1) {
    evento.target.classList.remove('tarefa-riscada');
    evento.target.classList += ' tarefa-ativa';
  } else {
    evento.target.classList.remove('tarefa-ativa');
    evento.target.classList += ' tarefa-riscada';
  }
}

function doubleClickTarefa(item) {
  item.addEventListener('dblclick', riscaTarefa);
}

/* Escrever texto do input na li */

function textonaLista() {
  const itemLista = document.createElement('li');
  itemLista.innerText = textoTarefa.value;
  itemLista.className = 'tarefa tarefa-ativa';
  textoTarefa.value = '';
  listaOrdenada.appendChild(itemLista);
  textoTarefa.focus();
  listaOrdenada.querySelectorAll('li').forEach(singleClickTarefa);
  listaOrdenada.querySelectorAll('li').forEach(doubleClickTarefa);
}

criarTarefa.addEventListener('click', textonaLista);

/* Botão apagar tudo */

function apagarTudo() {
  listaOrdenada.innerHTML = '';
}

botaoApagarTudo.addEventListener('click', apagarTudo);

/* Botão apagar riscados */

function apagarItemsLista() {
  const itemListaOrdenada = listaOrdenada.querySelectorAll('li');
  for (let i = 0; i < itemListaOrdenada.length; i += 1) {
    const listaTodasClasses = itemListaOrdenada[i].className;
    const buscaRisco = listaTodasClasses.indexOf(buscaClasse);
    if (buscaRisco !== -1) {
      itemListaOrdenada[i].parentNode.removeChild(itemListaOrdenada[i]);
    }
  }
}

function buscaRiscadas() {
  buscaClasse = 'tarefa-riscada';
  apagarItemsLista();
}

botaoApagarRiscadas.addEventListener('click', buscaRiscadas);

/* Botão apagar selecionado */

function buscaSelecionada() {
  buscaClasse = 'tarefa-selecionada';
  apagarItemsLista();
}


botaoApagarSelecionada.addEventListener('click', buscaSelecionada);
