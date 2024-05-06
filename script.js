let inputFirstCoin = document.querySelector('#firstCoin')
let inputSecondCoin = document.querySelector('#secondCoin')

let btnConverter = document.querySelector('#btnConverter')

let firstSelect = document.querySelector('#firstSelect')
let secondSelect = document.querySelector('#secondSelect')

let conversor = {
  'Real': {
    'Dolar': 5,
    'Euro': 5.5,
    'Libra': 6.4,
    'Iene': 0.033
  },

  'Dolar': {
    'Real': 5,
    'Euro': 1.08,
    'Libra': 0.8,
    'Iene': 153.79
  },

  'Euro': {
    'Real': 5.5,
    'Dolar': 1.08,
    'Libra': 0.86,
    'Iene': 165.63
  },

  'Libra': {
    'Real': 6.37,
    'Dolar': 1.26,
    'Euro': 1.17,
    'Iene': 193.46
  },

  'Iene' : {
    'Real': 0.033,
    'Dolar': 0.0065,
    'Euro': 0.0060,
    'Libra': 0.0052
  }
}

let caracteres = {
  'Real' : 'R$',
  'Dolar': '$',
  'Euro': '€',
  'Libra': '£',
  'Iene': '¥',
}

const validarInput = (inputFirstCoin) => {
  let simbolo = caracteres[firstSelect.value]
  let inputSemSimbolo = inputFirstCoin.value.replace(simbolo, '') 
  
  if(isNaN(inputSemSimbolo) || inputSemSimbolo === '') {
    alert('Somente é aceito números')
    return true
  }
}

inputFirstCoin.value = 'R$'
inputSecondCoin.value = '$'

firstSelect.onchange = () => {
  inputFirstCoin.value = caracteres[firstSelect.value] 
}

secondSelect.onchange = () => {
  inputSecondCoin.value = caracteres[secondSelect.value] 
}

btnConverter.onclick = () => {
  if(validarInput(inputFirstCoin)) {
    inputFirstCoin.value = caracteres[firstSelect.value]
    inputSecondCoin.value = caracteres[secondSelect.value]
  } else {
    let fatorMult = conversor[firstSelect.value][secondSelect.value]
    
    let simbolo = caracteres[firstSelect.value]
    let number = inputFirstCoin.value.replace(simbolo, '') 

    inputSecondCoin.value = caracteres[secondSelect.value] + (Number(number) * fatorMult).toFixed(2)
  }
}

