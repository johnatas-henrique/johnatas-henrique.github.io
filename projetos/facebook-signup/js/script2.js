function verificaSelectVazia() {
  if (valorGenero === 3 && selectPronome.value === '') {
    contadorValida += 1;
    alertaErro += '\nO campo Selecione seu pronome está vazio.';
  }
}
botaoEnviar.addEventListener('click', verificaSelectVazia);
