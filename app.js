let numeroSecreto = 0;
let Intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p' , `Acertaste el número en ${Intentos} ${(Intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {      
            asignarTextoElemento('p' , 'El Número secreto es menor');
        } else {
            asignarTextoElemento('p' , 'El número secreto es mayor');
        }
        Intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se han sorteado todos los números posibles");
    } else {
    //Si el número generado está incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);        
        return numeroGenerado;
        }
    }
    }

    function condicionesIniciales(){
        asignarTextoElemento('h1', 'Juego del número secreto');
        asignarTextoElemento('p' , `Indica un número del 1 al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto();
        Intentos = 1;

    }
    function reiniciarJuego() {
        //Limpiar la caja
        limpiarCaja();
        //Indicar mensaje de intervalo de números
        //Generar el número aleatorio
        //Inicializar el conteo de intentos
        condicionesIniciales();
        //Deshabilitar el botón de nuevo juego
        document.querySelector('#reiniciar').setAttribute('disabled',true)
        
    }
    
   condicionesIniciales();