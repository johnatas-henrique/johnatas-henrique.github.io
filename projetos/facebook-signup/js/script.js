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
const containerEmailEFone = document.querySelector('#fone-email');
const selectPronome = document.querySelector('.select-pronome');
const inputGeneroOpt = document.querySelector('#gender-opt');
const formRegister = document.querySelector('#form-register');

const camposInputForm = [
  inputNome, inputSobrenome, inputFoneOuEmail, inputSenha, inputDtNasc, inputGeneroOpt,
];
const camposObrigInputForm = [
  inputNome, inputSobrenome, inputFoneOuEmail, inputSenha, inputDtNasc,
];
const camposObrigInputName = [
  'Nome', 'Sobrenome', 'Celular ou email', 'Nova senha', 'Data nascimento',
];

let emailErro = '';
let contadorEmail = 0;
let contadorGenero = 1;
let valorGenero = 0;
let senhaErro = '';
let contadorSenha = 0;
let contadorValida = 0;
let alertaErro = '';
let alertaOk = '';

/* Pikaday JS - Requisito 17 */

new Pikaday({
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

new Validator(formRegister, function (err, res) {
  let answer = res;
  if (contadorGenero === 1) {
    answer = false;
  }
  if (valorGenero === 3 && selectPronome.value === '') {
    answer = false;
  }
  return answer;
}, {
  rules: {
    dtval(value) {
      const dataReg = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([1|2][9|0][0-9][0-9])/;
      if (value.match(dataReg)) {
        return true;
      }
      return false;
    },
  },
  messages: {
    pt: {
      dtval: {
        incorrect: 'Por favor, digite uma data válida no estilo "DD/MM/AAAA"',
      },
    },
  },
});

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
containerEmailEFone.appendChild(divEmail);

function funcaoEmailEFone() {
  emailErro = '';
  const emailReg = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9]+(-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
  const foneReg = /^[0-9]{2}9?[0-9]{8}$/;
  if (inputFoneOuEmail.value !== '') {
    if (inputFoneOuEmail.value.match(emailReg) || inputFoneOuEmail.value.match(foneReg)) {
      divEmail.classList.add('esconder');
      contadorEmail = 0;
      return true;
    }
    emailErro = '\nO campo Celular ou email é inválido';
    contadorEmail = 1;
    divEmail.classList.remove('esconder');
    return false;
  }
  return false;
}
inputFoneOuEmail.addEventListener('keyup', funcaoEmailEFone);

/* Validação de senha (acima de 6 caracteres) */

function senhaMaisCaracteres() {
  contadorSenha = 0;
  if (inputSenha.value !== '') {
    if (inputSenha.value.length > 5) {
      senhaErro = '';
      contadorSenha = 0;
      return true;
    }
    senhaErro = '\nO campo Senha é inválido';
    contadorSenha = 1;
    return false;
  }
  return false;
}
inputSenha.addEventListener('keyup', senhaMaisCaracteres);

/* Escondendo/Mostrando Div dependendo do gênero escolhido */

function mostraChildUndefined() {
  const valorRadio = document.querySelector('input[name=genero]:checked');
  const valor = parseInt(valorRadio.value, 10);
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
  const nomeCampo = event.target.name;
  const escondeLabel = document.querySelector(`label[for=${nomeCampo}]`);
  if (event.target.value === '') {
    escondeLabel.classList.remove('esconder');
  } else {
    escondeLabel.classList.add('esconder');
  }
}

function escutaCampos(item) {
  item.addEventListener('keyup', verificaVazioLimpaPlaceholder);
  item.addEventListener('change', verificaVazioLimpaPlaceholder);
}

camposInputForm.forEach(escutaCampos);

/* Criar Alerts */

function verificaCamposInputVazios() {
  alertaErro = 'Falhas no cadastro, por favor confira os erros abaixo:';
  alertaOk = 'Cadastro preenchido com sucesso, informações abaixo:';
  contadorValida = 0;
  for (let i = 0; i < camposObrigInputForm.length; i += 1) {
    if (camposObrigInputForm[i].value === '') {
      const nomeCampo = camposObrigInputForm[i].name;
      const labelCampo = document.querySelector(`label[for=${nomeCampo}]`);
      contadorValida += 1;
      alertaErro += `\nO campo ${labelCampo.innerText} está vazio.`;
    } else {
      alertaOk += `\n${camposObrigInputName[i]}: ${camposObrigInputForm[i].value}`;
    }
  }
}

botaoEnviar.addEventListener('click', verificaCamposInputVazios);


function verificaRadiosVazias() {
  contadorGenero = 1;
  for (let i = 0; i < arrRadios.length; i += 1) {
    if (arrRadios[i].checked) {
      contadorGenero = 0;
      valorGenero = arrRadios[i].value;
      valorGenero = parseInt(valorGenero, 10);
    }
  }
  if (contadorGenero === 1) {
    alertaErro += '\nO campo Gênero está vazio.';
  }
}

botaoEnviar.addEventListener('click', verificaRadiosVazias);

function verificaSelectVazia() {
  if (valorGenero === 3 && selectPronome.value === '') {
    contadorValida += 1;
    alertaErro += '\nO campo Selecione seu pronome está vazio.';
  }
}

botaoEnviar.addEventListener('click', verificaSelectVazia);

function mostraAlerta() {
  if (contadorValida === 0 && contadorEmail === 0 && contadorSenha === 0 && contadorGenero === 0) {
    alert(alertaOk);
  } else {
    alertaErro += `${emailErro}`;
    alertaErro += `${senhaErro}`;
    alert(alertaErro);
  }
}

botaoEnviar.addEventListener('click', mostraAlerta);
