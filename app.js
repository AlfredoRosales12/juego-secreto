let numeroSecreto=0;
let intentos=0;
let listNumerosSorteados=[];
let numeroMaximo=10;

console.log(numeroSecreto);

function verificarIntento(){
    let numeroUsuario=parseInt(document.getElementById('valorUsuario').value); //Obtiene el valor del campo valorUsuario
    
    if(numeroUsuario===numeroSecreto){
        asignarElemento('p',`Acertaste el número en ${intentos} ${intentos===1 ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');        
    }else{
        if(numeroUsuario>numeroSecreto){
            asignarElemento('p','El número Secreto es menor.');
        }else{
            asignarElemento('p','El número Secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function asignarElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function generarNumeroSectreto(){
    let numeroGenerado= Math.floor((Math.random()*numeroMaximo)+1);
    console.log(numeroGenerado);
    console.log(listNumerosSorteados);
    if(listNumerosSorteados.length ==numeroMaximo){
        asignarElemento('p','Ya se sortearon todos los números');
    }else{
        if(listNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSectreto();
        }else{
            listNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function condicionesIniciales(){
    asignarElemento('h1','Juego del número Secreto');
    asignarElemento('p',`Indica un número entre el 1 y el ${numeroMaximo}:`);
    numeroSecreto=generarNumeroSectreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    /*
        Mensaje de inicio de intervalo de números
        Generar el número aleatorio
        Inicializar el contador de intentos.
    */
    condicionesIniciales();
    //Deshabilitar el botón de Nuevo Juego   
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
