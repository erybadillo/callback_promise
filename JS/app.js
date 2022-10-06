const paises = ['Francia', 'Holanda', 'Argentina', 'España', 'Portugal']

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais)
        callback();

    }, 2000)
}


function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        })
    }, 2000)
}

function IniciarCallbackHell() {
    setTimeout(() => {
        //agregar un nuevo pais
        nuevoPais('Alemania', mostrarPaises)
        setTimeout(() => {
            nuevoPais('Colombia', mostrarPaises)
            setTimeout(() => {
                nuevoPais('Bolivia', mostrarPaises)
            }, 3000);
        }, 3000);
    }, 3000)
}
IniciarCallbackHell()