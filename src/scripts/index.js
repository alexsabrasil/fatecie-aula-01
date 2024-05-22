const inputContainer = document.querySelector('.input')
const cepInput = document.getElementById('cep')
const btnSearch = document.querySelector('#btn-search')
const resultContainer = document.getElementById('results-container')

cepInput.addEventListener('keyup', formatCep)
btnSearch.addEventListener('click', getCep)

function formatCep(e) {
  const cep = e.target.value
  e.target.value = cep.replace(/\D/g, '')
}

function getCep() {
  clearErrors()
  const cep = cepInput.value

  if (!isCepValid(cep)) {
    addErrorMessage()
    return
  }

  resultContainer.innerHTML = "Carregando..."

  fetch(`https://viacep.com.br/ws/${cep}/json`, {
    method: "GET",
    mode: "cors",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then((response) => response.json())
    .then((data) => {
        console.log('Dados recebidos da API:' , data)
        if (data.erro) { 
      resultContainer.innerHTML = "CEP não encontrado" 
    } else { 
      resultContainer.innerHTML = ""
      resultContainer.appendChild(createResultCard(data))
    }

    })
    .catch((error) => {
      console.log('Erro ao buscar CEP:' , error)
      resultContainer.innerHTML = "Erro ao buscar CEP"
    })
}

function isCepValid(cep) {
  const regexCep = /^[0-9]{8}$/

  return regexCep.test(cep) 
    
}
  
function createResultCard(data) {
  const card = document.createElement('div');
  card.className = 'card';

  const title = document.createElement('h2');
  title.className = 'result-title';
  title.textContent = 'Resultado';

  card.appendChild(title);

  card.appendChild(createField('CEP', data.cep || 'N/A'))
  card.appendChild(createField('Estado', data.uf || 'N/A'))
  card.appendChild(createField('Cidade', data.localidade || 'N/A'))
  card.appendChild(createField('Bairro', data.bairro || 'N/A'))
  card.appendChild(createField('Logradouro', data.logradouro || 'N/A'))

  return card
}

function createField(name, value) {
  const field = document.createElement('div')
  field.className = 'field'

  const nameSpan = document.createElement('span')
  nameSpan.className = 'name-field'
  nameSpan.textContent = name + ': '

  const valueSpan = document.createElement('span')
  valueSpan.className = 'response-field'
  valueSpan.textContent = value

  field.appendChild(nameSpan)
  field.appendChild(valueSpan)

  return field

}

function addErrorMessage() {
  const errorAlreadyExists = document.querySelector('.erro-message')

  if (errorAlreadyExists) {
    return
  }

  const small = document.createElement('small')
  small.className = 'error-message'
  small.textContent = 'CEP inválido'
  inputContainer.appendChild(small)

  cepInput.classList.add('input-error')
}

function clearErrors() {
  cepInput.classList.remove('input-error')
  const errorMessage = document.querySelector('.error-message')
  if (errorMessage) {
      errorMessage.remove()
  }
}