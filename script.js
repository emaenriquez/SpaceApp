const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5`

fetch(url)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))


const solicitud = new Promise((resolve,reject) => {
    const respuesta = 'resuelta';

    if (respuesta == "resolve") {
        resolve('la promesa se cumplio')
    } else {
        reject("la promesa no se pudo cumplio")
    }

})

console.log(solicitud)