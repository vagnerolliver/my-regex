const  { evaluateRegex } = require("./utils")

class Person {
    constructor([
        nome,
        nacionalidade,
        estadoCivil,
        documento,
        rua,
        numero,
        bairro,
        estado,
    ]) {

        const firstLetterExp = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/)
        const formatterFirstLetter = (prop) => {
            return prop.replace(firstLetterExp, (fullMath, group1, group2) => {
                return `${group1.toUpperCase()}${group2.toLowerCase()}`;
            })
        }

        this.nome = nome    
        this.nacionalidade = formatterFirstLetter(nacionalidade)
        this.estadoCivil = formatterFirstLetter(estadoCivil)
        this.documento = documento.replace(evaluateRegex(/\D/g), '')
        // this.rua = rua.replace(evaluateRegex(/(?<=\sa\s).*$/), '')
        // o match pega o resultado a frente da regex
        this.rua = rua.match(evaluateRegex(/(?<=\sa\s).*$/)).join()
        this.numero = numero 
        this.bairro = bairro.match(evaluateRegex(/(?<=\s).*$/)).join()
        this.estado = estado.replace(evaluateRegex(/\./g), '')
    }


}

module.exports = Person