 const fs = require('fs')  
 const path = require('path')

 const filePath = path.resolve(__dirname, 'tasks.csv')

async function buscarArquivo() {
    const promessaArquivo = await fs.promises.readFile(filePath)
    const textoArquivo = promessaArquivo.toString('utf-8')
    console.log(textoArquivo)
}

buscarArquivo()