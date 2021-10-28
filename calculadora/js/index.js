const operaciones = document.getElementById("operaciones")
const resultado = document.getElementById("resultado")

const n1 = document.getElementById("n-1")
const n2 = document.getElementById("n-2")
const n3 = document.getElementById("n-3")
const n4 = document.getElementById("n-4")
const n5 = document.getElementById("n-5")
const n6 = document.getElementById("n-6")
const n7 = document.getElementById("n-7")
const n8 = document.getElementById("n-8")
const n9 = document.getElementById("n-9")
const n0 = document.getElementById("n-0")

const accionSumar = document.getElementById("accion-suma")
const accionRestar = document.getElementById("accion-resta")
const accionDividir = document.getElementById("accion-dividir")
const accionMultiplicar = document.getElementById("accion-multiplicacion")

// La raiz se ejecuta por separado
const accionRaiz = document.getElementById("accion-raiz")
const borrar = document.getElementById("borrar")

const resolver = document.getElementById("resolver")

borrar.addEventListener("click", function () {
    operaciones.innerText = ""
})

const agregarOperacion = (valor) => {
    const valorPrevio = operaciones.textContent.slice(operaciones.textContent.length - 1)

    const prevEsUnaOperacion = valorPrevio === "/" || valorPrevio === "*" || valorPrevio === "+" || valorPrevio === "-"
    const actualEsUnaOperacion = valor === "/" || valor === "*" || valor === "+" || valor === "-"

    if (prevEsUnaOperacion && actualEsUnaOperacion) {
        return
    }

    operaciones.innerText = operaciones.textContent.concat(valor)
}

accionSumar.addEventListener("click", function () {
    agregarOperacion("+")
})

accionDividir.addEventListener("click", function () {
    agregarOperacion("/")
})

accionRestar.addEventListener("click", function () {
    agregarOperacion("-")
})

accionMultiplicar.addEventListener("click", function () {
    agregarOperacion("*")
})

accionRaiz.addEventListener("click", function () {

})

n1.addEventListener("click", function () {
    agregarOperacion("1")
})

n2.addEventListener("click", function () {
    agregarOperacion("2")
})

n3.addEventListener("click", function () {
    agregarOperacion("3")
})

n4.addEventListener("click", function () {
    agregarOperacion("4")
})

n5.addEventListener("click", function () {
    agregarOperacion("5")
})

n6.addEventListener("click", function () {
    agregarOperacion("6")
})

n7.addEventListener("click", function () {
    agregarOperacion("7")
})

n8.addEventListener("click", function () {
    agregarOperacion("8")
})

n9.addEventListener("click", function () {
    agregarOperacion("9")
})

n0.addEventListener("click", function () {
    agregarOperacion("0")
})

// Resolver todo lo que esté dentro 
// del componenente "resultados"

var operations = {
    "+": hacerSumar,
    "*": hacerMultiplicacion,
    "/": hacerDivisio,
    sqrt: hacerRaiz
};

function resolverOperaciones() {
    const op = operaciones.textContent;


    // const listaOperaciones: string[]
    const listaOperaciones = op.split("")
    // ["3", "*", "3", "3"] -> 4 .length
    // [3, *, 33] -> 4 .length

    let listaNueva = []

    let valorAnterior = ""

    listaOperaciones.forEach(function (valor, index) {

        let operation = operations[valor];

        if (operation) {
            return operation(valor)
        }
    })

    console.log({ op, listaOperaciones })

    let resultado = 0;

    return listaOperaciones.reduce(function (prev, current, list) {

    }, 0)

    return resultado
}


// -----

resolver.addEventListener("click", resolverOperaciones)


function hacerSumar() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;

    return numero1 + numero2
}

function hacerRestar() {
    let total = 0;

    for (let i = 0; i < arguments.lenght; i++) {
        total -= arguments[i];
    }

    return total;

    return numero1 - numero2
}

function hacerMultiplicacion() {
    let total = 0;

    for (let i = 0; i < arguments.lenght; i++) {
        total *= arguments[i];
    }

    return total;

    return numero1 * numero2
}

function hacerDivisio() {
    let total = 0;
    for (i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total / (arguments.length - 1);
}

function hacerRaiz(numero1) {
    return Math.sqrt(numero1)
}




