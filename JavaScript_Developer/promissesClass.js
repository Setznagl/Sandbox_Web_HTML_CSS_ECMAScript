const promessaNumeroRandom = new Promise((resolve, reject) => {

  setTimeout(() => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)  
  }, 1000);  
  
})

promessaNumeroRandom
    //para encadear é necessário retornar o valor que será manipuldo no próximo then
    .then((value) => value)
    .then((value) => console.log("Valor original: " + value + " :Valor final: " + parseInt(value + 10)))
    .catch((e) => console.error(e))
    //arrow function no finally previne que seja executado imediatamente, dessa forma só ocorre quando a promisse é resolvida
    .finally(() => console.log("Tudo ok!"))

 const fs = require('fs')  
 const arquivo = fs.promises.readFile('./JavaScript_Developer/tasks.csv') 

 arquivo    
    .then( (response) => response.toString('utf8') )
    .then( (respose) => respose.split('\n').slice(1) )
    .then( (response) => response.map(
        (l) => {
            const[nome , feito] = l.split(';')
            return{
                nome,
                feito: feito.trim() === 'true'
            }
        }))
    .then( (response) => console.log(response) )    
    .catch( (e) => console.log("Não foi possível ler o arquivo, " + e))