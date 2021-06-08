


const { expect } = require('chai')
const sinon = require('sinon')
const readline = require('readline-sync')

const calculaArea = require('../calculaArea.js')

describe('Executa o script calculaArea', () =>{

    before(() => {
        sinon.stub(readline, 'questionInt').returns(10);
    })
    after(() => {
        readline.questionInt.restore()
    })

    describe('a resposta', () =>{
        it('é number', () => {
            const resposta = calculaArea();
            expect(resposta).to.be.a('number');
        })

        it('é igual a "100"', () => {
            const resposta = calculaArea();
            expect(resposta).to.be.equals(100);
        })
    })
})