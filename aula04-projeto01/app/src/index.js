'use stric';

const TextProcessorFacade = require("./textProcessorFacace")
const { readFile }  = require('fs/promises')
const { join } = require('path')
const pdf = require('pdf-parse')

;(async () =>{

    const dataBuffer = await readFile((join(__dirname, './../../../docs/contrato.pdf')))
    const data = await pdf(dataBuffer)
    console.log('data', data.text)

    const instance = new TextProcessorFacade(data.text)
    const people = instance.getPeopleFromPDF()
    console.log('#################################')
    console.log('PEOPLE')
    console.log(people)
    console.log('#################################')
})()