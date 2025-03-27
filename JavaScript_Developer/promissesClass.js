

new Promise(
    (resolve , reject) => {

    }
)

const promessaNumeroRandom = new Promise((resolve, reject) => {

  setTimeout(() => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)  
  }, 1000);  
  
})

promessaNumeroRandom
    //para encadear é necessário retornar o valor que será manipuldo no próximo then
    .then( (value) => { console.log(value) ; return value })
    .then( (value) => console.log(parseInt(value) + 10))
    .catch( (e) => console.error(e))
    //arrow function no finally previne que seja executado imediatamente, dessa forma só ocorre quando a promisse é resolvida
    .finally( () => console.log("Tudo ok!"))