/* Pikaday JS - Requisito 17 */

const dataNasc = new Pikaday({
  field: document.getElementById('dtnasc'),
  firstDay: 1,
  minDate: new Date(1899, 12, 1),
  maxDate: new Date(2020, 12, 31),
  yearRange: [1900, 2020],
  format: 'DD/MM/YYYY',
  i18n: {
    previousMonth: 'Mês anterior',
    nextMonth: 'Novo mês',
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  },
});

/* Validações com a Lib js-form-validator */
const formRegister = document.querySelector('#form-register');

const validaCampos = new Validator(formRegister, function (err, res) {
  return res;
}, {
  rules: {
    date: function (value) {
      const dataReg = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([1|2][9|0][0-9][0-9])/;
      if (value.match(dataReg)) {
        return true;
      }
    }
  },
  messages: {
    pt: {
      date: {
        incorrect: 'Por favor, digite uma data válida no estilo "DD/MM/AAAA"'
      }
    }
  }
});

/* Variáveis globais */
const botaoEnviar = document.querySelector('#enviar');
const containerRadios = document.querySelector('.gender-block');
const arrRadios = document.querySelectorAll('.gender-input');
const divErro = document.createElement('div');
const divEmail = document.createElement('div');
const divUndefined = document.querySelector('#show-undefined');

const inputNome = document.querySelector('#nome');
const inputSobrenome = document.querySelector('#sobrenome');
const inputFoneOuEmail = document.querySelector('#fone-ou-email');
const inputSenha = document.querySelector('#senha');
const inputDtNasc = document.querySelector('#dtnasc');
const radioFeminino = document.querySelector('#feminino');
const radioMasculino = document.querySelector('#masculino');
const radioPersonalizado = document.querySelector('#personalizado');
const selectPronome = document.querySelector('.select-pronome');
const inputGeneroOpt = document.querySelector('#gender-opt');

const camposInputForm = [
  inputNome, inputSobrenome, inputFoneOuEmail, inputSenha, inputDtNasc, inputGeneroOpt
]

/* Validando radio button */
divErro.className = 'error esconder';
divErro.setAttribute('data-type', 'validator-error');
divErro.innerHTML = 'Escolha um gênero. Você poderá alterar quem pode ver isso posteriormente.';
containerRadios.appendChild(divErro);

function checkGenero() {
  for (let i = 0; i < arrRadios.length; i += 1) {
    if (arrRadios[i].checked) {
      divErro.classList.add('esconder');
      break;
    } else {
      divErro.classList.remove('esconder');
    }
  }
}

function alterGenero(item) {
  item.addEventListener('blur', checkGenero);
  item.addEventListener('change', checkGenero);
}

arrRadios.forEach(alterGenero);
botaoEnviar.addEventListener('click', checkGenero);

/* Validação fone e email na caixa */

divEmail.className = 'error esconder';
divEmail.setAttribute('data-type', 'validator-email');
divEmail.innerHTML = 'Insira um número de celular ou email válido.<br>Exemplos válidos: 11987876565 ou contato@provedor.com';
containerEmailEFone = document.querySelector('#fone-email');
containerEmailEFone.appendChild(divEmail);
let emailErro = '';
let contadorEmail = 0;

function funcaoEmailEFone() {
  emailErro = '';
  const emailReg = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
  const foneReg = /^^[0-9]{2}9?[0-9]{8}$/;
  if (inputFoneOuEmail.value != ''){
    if (inputFoneOuEmail.value.match(emailReg) || inputFoneOuEmail.value.match(foneReg)) {
      divEmail.classList.add('esconder');
      contadorEmail = 0;
      return true;
    }
    else {
      emailErro = '\nO campo Celular ou email é inválido';
      contadorEmail = 1;
      divEmail.classList.remove('esconder');
    }
  }
}
  inputFoneOuEmail.addEventListener('keyup', funcaoEmailEFone);

/* Validação de senha (acima de 6 caracteres) */

let contadorSenha = 0;
let senhaErro = '';
function senhaMaisCaracteres() {
  contadorSenha = 0;
  
  if (inputSenha.value.length > 5){
    SenhaErro = '';
    contadorSenha = 0;
      return true;
    }
    else {
      senhaErro = '\nO campo Senha é inválido';
      contadorSenha = 1;
    }
  }
  inputSenha.addEventListener('keyup', senhaMaisCaracteres);

/* Escondendo/Mostrando Div dependendo do gênero escolhido */

function mostraChildUndefined() {
  let valorRadio = document.querySelector('input[name=genero]:checked');
  let valor = parseInt(valorRadio.value, 10);
  if (valor === 3) {
    divUndefined.classList.remove('esconder');
  } else {
    divUndefined.classList.add('esconder');
  }
}

function changeRadio(item) {
  item.addEventListener('change', mostraChildUndefined);
}

arrRadios.forEach(changeRadio);

/* Verificar campos vazios e remover placeholder personalizado */

function verificaVazioLimpaPlaceholder(event) {
  if (event.target.value == '') {
    let nomeCampo = event.target.name;
    escondeLabel = document.querySelector(`label[for=${nomeCampo}]`);
    escondeLabel.classList.remove('esconder');
  } else {
    let nomeCampo = event.target.name;
    escondeLabel = document.querySelector(`label[for=${nomeCampo}]`);
    escondeLabel.classList.add('esconder');
  }
}

function escutaCampos(item) {
  item.addEventListener('keyup', verificaVazioLimpaPlaceholder);
  item.addEventListener('change', verificaVazioLimpaPlaceholder);
}

camposInputForm.forEach(escutaCampos);

/* Criar Alerts */
let valorGenero = 0;
let contadorValida = 0;
let alertaErro = '';
let alertaOk = '';

const camposObrigInputForm = [
  inputNome, inputSobrenome, inputFoneOuEmail, inputSenha, inputDtNasc
]

const camposObrigInputName = [
  'Nome', 'Sobrenome', 'Celular ou email', 'Nova senha', 'Data nascimento'
]

function verificaCamposInputVazios() {
  alertaErro = 'Falhas no cadastro, por favor confira os erros abaixo:';
  alertaOk = 'Cadastro preenchido com sucesso, informações abaixo:';
  for (let i = 0; i < camposObrigInputForm.length; i += 1) {
    if (camposObrigInputForm[i].value == '') {
      let nomeCampo = camposObrigInputForm[i].name;
      labelCampo = document.querySelector(`label[for=${nomeCampo}]`);
      contadorValida +=1;
      alertaErro += `\nO campo ${labelCampo.innerText} está vazio.`;
    }
    else {
      alertaOk +=`\n${camposObrigInputName[i]}: ${camposObrigInputForm[i].value}`;
    }
  }
}

botaoEnviar.addEventListener('click', verificaCamposInputVazios);

function verificaSelectVazia(){
  if (selectPronome.value == '') {
    contadorValida +=1;
    alertaErro += '\nO campo Selecione seu pronome está vazio.';
  }
}

function verificaRadiosVazias() {
  let contar = 0;
  for (let i = 0; i < arrRadios.length; i += 1) {
    if (arrRadios[i].checked) {
      contar = 1;
      valorGenero = arrRadios[i].value;
      if (valorGenero == 3) {
        verificaSelectVazia()
      }
    }
  }
  if (contar == 0) {
    contadorValida +=1;
    alertaErro += '\nO campo Gênero está vazio.';
  }
}

botaoEnviar.addEventListener('click', verificaRadiosVazias);

function mostraAlerta(){
  if (contadorValida === 0 && contadorEmail === 0 && contadorSenha === 0) {
    alert(alertaOk);
  }
  else {
    alertaErro += `${emailErro}`
    alertaErro += `${senhaErro}`
    alert(alertaErro);
  }
}

botaoEnviar.addEventListener('click', mostraAlerta);
