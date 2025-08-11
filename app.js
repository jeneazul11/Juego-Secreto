
let numeroSecreto = 0;
let intentos=1;
let listaGenerados=[];
let numeroMaximo = 100;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    if(listaGenerados.length == numeroMaximo){
        asignarTextoElemento('p',`Ya se sortearon todos los números posibles.`);
    }else{
            if(listaGenerados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }else{
                listaGenerados.push(numeroGenerado);
                return numeroGenerado;
            }
            
            
    }
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        if (numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste al número secreto en ${intentos} ${(intentos==1)? 'intento.':'intentos.'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            
        }else if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor.');
        }else{
            asignarTextoElemento('p','El número secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    return;
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value='';
}

function reiniciarJuego(){
    limpiarCaja();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    condicionesIniciales();
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto.');
    asignarTextoElemento('p',`Ingrese un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto=generarNumeroSecreto();  
    console.log(numeroSecreto);
    console.log(listaGenerados);  
}

condicionesIniciales();