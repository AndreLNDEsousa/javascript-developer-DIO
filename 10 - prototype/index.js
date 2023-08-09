
//Async e Awai
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('finalizou!!');
    }
}

    buscarArquivo()








//PROMISES E ASSINCRONISMO
/*

const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
    resolve(numero)
}, 1000)

console.log('Vai filhão!!!');


promessaDeUmNumeroQualquer
.then((value) => {
    console.log(value)
    return value + 10
    })
    .then((value) => {
        console.log(value);
    })
    
    .catch((error) => {
        console.log(error)
    })
    
    .finally(() => {
        console.log('Finalizou');
    })
    */
   
   
   /*
   //Manipulando Arquivos através de Promises
   
   const fs = require('fs')
   const path = require('path')
   
   //const promesaDaLeituraDoArquivo = fs.promises.readFile('tarefas.csv')
   //se o arquivo estiver em outra pasta pode se utilizar o Path
   const filePath = path.resolve(__dirname, 'tarefas.csv')
   
   const promesaDaLeituraDoArquivo = fs.promises.readFile(filePath)
   
   promesaDaLeituraDoArquivo
       .then((arquivo) => arquivo.toString('utf8'))
       .then((texto) => console.log(texto.split('/n').slice(1)))
       .then((linhaSemOCabecalho) => linhaSemOCabecalho.map((linha) => {
           const [nome, feito] = linha.split(';')
           return {
               nome,
               feito: feito.trim() === 'true'
           }
       }))
       .catch((error) => console.log('Deu ruim', error))
   
   })
   */