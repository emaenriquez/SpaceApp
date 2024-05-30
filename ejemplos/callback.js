
function uno (num) {
    console.log("uno")
    setTimeout(num,2000)
}

function dos () {
    console.log("dos")
}

setTimeout(()=>uno(dos), 1000)
setTimeout(dos, 2000)



// funcion anonima
const nombre = function(){
    console.log("nombre")
}
// nombre()

// funciones de flecha
const nombre2 = () => {
    console.log("nombre2")
}
// nombre2()

const nombre3 = () => console.log("nombre3")
// nombre3();

// () => console.log('2')