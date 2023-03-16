'use strict' 
// navegador ser mais rigoroso com o codigo, OBS: nao deixar trbalar com variaveis globais

// import { cep } from './cep.js'

import { pesquisarCep } from './viacep.js'
// import { pesquisarCep } from './postmon.js'


const preencherFormulario = async () => {

    const cepDigitado = document.getElementById('cep').value
    const cep = await pesquisarCep(cepDigitado)
    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    document.getElementById('cidade').value = cep.municipio 
    document.getElementById('estado').value = cep.estado
}


document.getElementById('cep').addEventListener('blur', preencherFormulario)