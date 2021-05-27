// Capturando elementos do html
const elemBares = document.querySelector('#nb');
const elemNivel_bar = document.querySelector('#nib');
const elemNum_balada = document.querySelector('#nba');
const elemNivel_balada = document.querySelector('#niba');
const elemNivel_sede = document.querySelector('#nis');
const elemKm = document.querySelector('#km');
const elemDia = document.querySelector('#dia');
const elemAdicionais = document.querySelector('#adicionais');
const elemResultado = document.querySelector('#resultado');
const elemBtn = document.querySelector('#btn')
const elembtn1 = document.querySelector('#btn1')

function calcular() {
  let bares = Number(elemBares.value);
  let nivel_bar = elemNivel_bar.selectedIndex
  let baladas = Number(elemNum_balada.value);
  let nivel_balada = elemNivel_balada.selectedIndex
  let nivel_sede = elemNivel_sede.selectedIndex
  let uber = elemKm.value;
  let dia = elemDia.selectedIndex
  let adicionais = elemAdicionais.value;

  // Validação entrada de dados
  // controle do input relacionado ao bar 
  if (bares < 0 || isNaN(bares)) {
    alert('Opção "quantidade de bares " não selecionada ou valor invalido!!!');
    elemQtd_bares.focus()
    return;
  }
  if (nivel_bar < 0) {
    alert('selecione uma opção de nivel do bar !!!');
    elemNivel_bar.focus();
    return
  }

  if (nivel_bar == 1) {
    nivel_bar = 1.1
  } else if (nivel_bar == 2) {
    nivel_bar = 1.5
  } else {
    nivel_bar = 2.2
  }

  if (isNaN(baladas) || baladas < 0) {
    alert('Quantidade de baladas não selecionada ou valor invalido!!!');
    elemNivel_sede.focus();
    return
  }
  if (nivel_balada < 0) {
    alert('selecione uma opção de nivel de balada');
    elemNivel_balada.focus();
    return
  }

  if (nivel_balada == 1) {
    nivel_balada = 2
  } else {
    nivel_balada = 3
  }

  if (!nivel_sede) {
    alert('selecione uma opção de nivel de sede!!!');
    elemNivel_sede.focus();
    return
  }

  if (nivel_sede == 1) {
    nivel_sede = 1
  } else if (nivel_sede == 2) {
    nivel_sede = 1.6
  } else {
    nivel_sede == 2.5
  }

  if (isNaN(uber) || uber < 0) {
    alert('Opção Uber não selecionado ou valor invalido!!!');
    elemKm.focus();
    return
  }
  if (!dia) {
    alert('selecione uma opção de dia do rolê');
    elemDia.focus();
    return
  }

  if (dia == 1) {
    dia = 1
  } else if (dia == 2) {
    dia = 1.4
  } else if (dia == 3) {
    dia = 1.6
  } else {
    dia = 1.2
  }
  if (isNaN(adicionais)) {
    alert('selecione uma opção de adicionais');
    elemAdicionais.focus();
    return
  }
  // limpar os campos de preenchimento apos calculo
  elemBares.value = '';
  elemDia.value = '';
  elemNivel_balada.value = 0;
  elemAdicionais.value = '';
  elemDia.value = 0;
  elemNivel_bar.value = 0;
  elemNum_balada.value = '';
  elemNivel_sede.value = 0;
  elemKm.value = '';

  // calculo do resultado final 
  let consumoBar = (bares * nivel_bar * nivel_sede * 5 * 9);
  let consumoBalada = (baladas * nivel_balada * nivel_sede * 5 * 9);
  let deslocamento = (uber * dia * 4)

  let valorFinal = (consumoBar + consumoBalada + deslocamento + adicionais);

  elemResultado.innerText = 'O valor do seu rolê será R$:' + Math.round(valorFinal).toFixed(2);
}


elemBtn.addEventListener('click', calcular)
