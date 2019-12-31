/* global Pikaday Validator*/

/* Variáveis globais */

const botaoEnviar = document.querySelector('#enviar');
const arrRadios = document.querySelectorAll('.gender-input');
const divGenero = document.querySelector('#show-genero');
const divEmail = document.querySelector('#show-email');
const divNome = document.querySelector('#show-nome');
const divSobrenome = document.querySelector('#show-sobrenome');
const divPikaday = document.querySelector('#show-pikaday');
const divUndefined = document.querySelector('#show-undefined');
const inputNome = document.querySelector('#nome');
const inputSobrenome = document.querySelector('#sobrenome');
const inputFoneOuEmail = document.querySelector('#fone-ou-email');
const inputSenha = document.querySelector('#senha');
const inputDtNasc = document.querySelector('#dtnasc');
const inputUser = document.querySelector('#user');
const inputPassword = document.querySelector('#password');
const botaoEntrar = document.querySelector('#entrar');

const nomeReg = /^[a-zA-Z\u00C0-\u017F\s]+$/;
const emailReg = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9]+(-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
const foneReg = /^[0-9]{2}9?[0-9]{8}$/;

const cpInputForm = [inputNome, inputSobrenome, inputFoneOuEmail, inputSenha, inputDtNasc];
const cpInputName = ['Nome', 'Sobrenome', 'Celular ou email', 'Nova senha', 'Data nascimento'];

let contaErros = 0;
let entrarOk = 'Alerta quando a validação estiver Ok';
let entrarErro = 'Alerta quando a validação acusar erro';
let emailErro = '';
let ctEmail = 0;
let pikadayErro = '';
let ctPikaday = 0;
let nomeErro = '';
let ctNome = 0;
let sobrenomeErro = '';
let ctSobrenome = 0;
let ctGenero = 1;
let valorGenero = 0;
let senhaErro = '';
let ctSenha = 0;
let ctValida = 0;
let respostaGeral = 0;
let alertaErro = '';
let alertaOk = '';

/* Pikaday JS - Requisito 17 */

const pikadayCC = new Pikaday({
  field: document.getElementById('dtnasc'),
  firstDay: 1,
  minDate: new Date(1899, 12, 1),
  maxDate: new Date(2020, 12, 31),
  yearRange: [1900, 2020],
  format: 'DD/MM/YYYY',
});

/* Validações com a Lib js-form-validator */

const validatorCC = new Validator(document.querySelector('#form-register'), function (err, res) {
  let answer = res;
  if (respostaGeral !== 0) {
    answer = false;
  }
  return answer;
});

/* Validando radio button */

function checkGenero() {
  for (let i = 0; i < arrRadios.length; i += 1) {
    if (arrRadios[i].checked) {
      divGenero.classList.add('esconder');
      break;
    } else {
      divGenero.classList.remove('esconder');
    }
  }
}

function alterGenero(item) {
  item.addEventListener('blur', checkGenero);
}
arrRadios.forEach(alterGenero);

botaoEnviar.addEventListener('click', checkGenero);

/* Validação nome sem números */

function validaNome() {
  if ((inputNome.value === '') || (inputNome.value !== '' && inputNome.value.match(nomeReg))) {
    nomeErro = '';
    divNome.classList.add('esconder');
    ctNome = 0;
  } else {
    nomeErro = '\nO campo Nome é inválido';
    ctNome = 1;
    divNome.classList.remove('esconder');
  }
}

inputNome.addEventListener('keyup', validaNome);

/* Validação sobrenome sem números */

function validaSobrenome() {
  const valorSobrenome = inputSobrenome.value;
  if ((valorSobrenome !== '' && valorSobrenome.match(nomeReg)) || (valorSobrenome === '')) {
    divSobrenome.classList.add('esconder');
    ctSobrenome = 0;
    sobrenomeErro = '';
  } else {
    ctSobrenome = 1;
    divSobrenome.classList.remove('esconder');
    sobrenomeErro = '\nO campo Sobrenome é inválido';
  }
}
inputSobrenome.addEventListener('keyup', validaSobrenome);

/* Validação fone e email na caixa */

function funcaoEmailEFone() {
  emailErro = '';
  if (inputFoneOuEmail.value !== '') {
    if (inputFoneOuEmail.value.match(emailReg) || inputFoneOuEmail.value.match(foneReg)) {
      divEmail.classList.add('esconder');
      ctEmail = 0;
      return true;
    }
    emailErro = '\nO campo Celular ou email é inválido';
    ctEmail = 1;
    divEmail.classList.remove('esconder');
    return false;
  }
  return false;
}
inputFoneOuEmail.addEventListener('keyup', funcaoEmailEFone);

/* Validação data maior que o dia de hoje */

function funcaoPikadayMaior() {
  pikadayErro = '';
  ctPikaday = 0;
  const dtAtual = Date.now();
  const dtCaixa = Date.parse(pikadayCC.toString('MM/DD/YYYY'));
  if (dtCaixa < dtAtual) {
    divPikaday.classList.add('esconder');
    return true;
  }
  pikadayErro = '\nO campo Data Nascimento é inválido';
  ctPikaday = 1;
  divPikaday.classList.remove('esconder');
  return false;
}
inputDtNasc.addEventListener('blur', funcaoPikadayMaior);

/* Validação de senha (acima de 6 caracteres) */

function senhaMaisCaracteres() {
  ctSenha = 0;
  if (inputSenha.value !== '') {
    if (inputSenha.value.length > 5) {
      senhaErro = '';
      ctSenha = 0;
      return true;
    }
    senhaErro = '\nO campo Senha é inválido';
    ctSenha = 1;
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
cpInputForm.forEach(escutaCampos);

/* Criar Alerts */

function verificaCamposInputVazios() {
  alertaErro = 'Falhas no cadastro, por favor confira os erros abaixo:';
  alertaOk = 'Cadastro preenchido com sucesso, informações abaixo:';
  ctValida = 0;
  for (let i = 0; i < cpInputForm.length; i += 1) {
    if (cpInputForm[i].value === '') {
      const nomeCampo = cpInputForm[i].name;
      const labelCampo = document.querySelector(`label[for=${nomeCampo}]`);
      ctValida += 1;
      alertaErro += `\nO campo ${labelCampo.innerText} está vazio.`;
    } else {
      alertaOk += `\n${cpInputName[i]}: ${cpInputForm[i].value}`;
    }
  }
}
botaoEnviar.addEventListener('click', verificaCamposInputVazios);

function verificaRadiosVazias() {
  ctGenero = 1;
  for (let i = 0; i < arrRadios.length; i += 1) {
    if (arrRadios[i].checked) {
      const escolhidoIdRadio = arrRadios[i].id;
      const escolhidoGenero = document.querySelector(`label[for=${escolhidoIdRadio}]`);
      ctGenero = 0;
      valorGenero = arrRadios[i].value;
      valorGenero = parseInt(valorGenero, 10);
      alertaOk += `\nGênero: ${escolhidoGenero.innerText}`;
    }
  }
  if (ctGenero === 1) {
    alertaErro += '\nO campo Gênero está vazio.';
  }
}
botaoEnviar.addEventListener('click', verificaRadiosVazias);

function verificaRespostaGeral() {
  const arrResposta = [ctEmail, ctGenero, ctNome, ctPikaday, ctSenha, ctSobrenome, ctValida];
  respostaGeral = 0;
  for (let i = 0; i < arrResposta.length; i += 1) {
    if (arrResposta[i] === 1) {
      respostaGeral += 1;
    }
  }
}

botaoEnviar.addEventListener('click', verificaRespostaGeral);

function mostraAlerta() {
  if (validatorCC.validate() === true && respostaGeral === 0) {
    alert(alertaOk);
  } else {
    alertaErro += `${nomeErro}${sobrenomeErro}${emailErro}${senhaErro}${pikadayErro}`;
    alert(alertaErro);
  }
}
botaoEnviar.addEventListener('click', mostraAlerta);

/* Alerta do botão enviar - Requisito 7 */

function entrarAlerta() {
  if (contaErros === 0) {
    alert(entrarOk);
  } else {
    alert(entrarErro);
  }
}

function entrarPassword() {
  if (inputPassword.value !== '') {
    entrarOk += `\nSenha: ${inputPassword.value}`;
  } else {
    entrarErro += '\nCampo Senha está vazio.';
    contaErros += 1;
  }
  entrarAlerta();
}

function entrarUser() {
  contaErros = 0;
  entrarOk = 'Alerta quando a validação = true';
  entrarErro = 'Alerta quando a validação = false';
  if (inputUser.value.match(emailReg) || inputUser.value.match(foneReg)) {
    entrarOk += `\nEmail ou telefone: ${inputUser.value}`;
  } else {
    entrarErro += '\nCampo Email ou telefone está vazio ou a informação não confere.';
    contaErros += 1;
  }
  entrarPassword();
}

botaoEntrar.addEventListener('click', entrarUser);
