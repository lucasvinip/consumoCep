'use strict'

export const pesquisarCep = async (cep) =>{
    const url = `https://api.postmon.com.br/v1/cep/${cep}`

    const response = await fetch(url)
    const data = await response.json()

    return {
        municipio: data.cidade,
        estado: data.estado,
        bairro: data.bairro,
        logradouro: data.logradouro,
    }
}