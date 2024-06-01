
const solicitud = new Promise((resolve,reject) => {
    const respuesta = 'resuelta';

    if (respuesta == "resolve") {
        resolve('la promesa se cumplio')
    } else {
        reject("la promesa no se pudo cumplio")
    }

})

console.log(solicitud)