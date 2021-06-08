

const { expect } = require('chai');
const fs = require('fs').promises
const sinon = require('sinon')
const { readFile } = require('../readFile.js')

describe('Chama a função "readFile"',() =>{
    describe('quando o arquivo é lido com sucesso', ()=> {
        
        const FILE_CONTENT = '#VQV TESTS'
        before(() => {
            sinon.stub(fs, 'readFile').resolves(FILE_CONTENT)
        })

        after(() =>{
            fs.readFile.restore()
        })
        describe('a resposta', ()=>{
            
            it('é uma string', async () =>{
                const resposta = await readFile('teste.txt')
                expect(resposta).to.be.a('string')
            })
            it('é igual ao conteúdo do arquivo', async () =>{
                const resposta = await readFile('arquivoExistente.txt')
                expect(resposta).to.be.equal(FILE_CONTENT)
            })
        })
    })
})

describe('quando ocorre algum erro na leitura do arquivo', () => {

    before(() => {
        sinon.stub(fs, 'readFile').rejects()
    })

    after(() => {
        fs.readFile.restore()
    })

    describe('a resposta', () => {
        it('é igual a "null"', async () =>{
            const resposta = await readFile('arquivoNaoExistente.txt')
            expect(resposta).to.be.equal(null)
        })
    })
})