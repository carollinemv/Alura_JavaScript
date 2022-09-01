export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
    if(input.validity.valid){
       input.parentElement.classList.remove('input-container--invalido') 
    } else {
        input.parentElement.classList.add('input-container--invalido')
    }
}

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode está vazio.'
    },
    email: {
        valueMissing: 'O campo de emailnão pode está vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    senha: {
        valueMissing: 'O campo de senha não pode está vazio.',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres,deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
    },
    dataNascimento: {
        valueMissing: 'O campo da data não pode está vazio.',
        customError: 'Você deve ser maior de 18 anos'
    }
    
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

   if (!maiorQue18(dataRecebida)){
    mensagem = 'Você deve ser maior de 18 anos para se cadastrar.'
   }
        input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}