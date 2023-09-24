function opcionComputadora (){
    const opciones = ['piedra', 'papel', 'tijeras']
    return opciones[Math.floor(Math.random()*3)];
}

function PlayRound (eleccionJugador, eleccionComputadora){
    eleccionJugador = eleccionJugador.toLowerCase()
    eleccionComputadora = eleccionComputadora.toLowerCase()

    //Logica del juego
    if (eleccionJugador === eleccionComputadora){
        return 'Empate!'
    }else if (
        (eleccionJugador === 'piedra') && (eleccionComputadora === 'tijeras')||
        (eleccionJugador === 'tijeras') && (eleccionComputadora === 'papel') ||
        (eleccionJugador === 'papel') && (eleccionComputadora === 'piedra')
    ){
        return 'Ganaste!'
    }else {
        return 'Perdiste!'
    }
}

function juego (){
    puntajeJugador = 0
    puntajeComputadora = 0

    for (let i = 0; i < 5; i++){
        const eleccionJugador = jugadorChoise()
        console.log('Tu eleccion', jugadorChoise())
        eleccionCompu = opcionComputadora()
        console.log('opcion de la compu', eleccionCompu)
        resultado = PlayRound(eleccionJugador, eleccionCompu)

        if(resultado === 'Ganaste!'){
            puntajeJugador++
        }else if(resultado ==='Perdiste'){
            puntajeComputadora++
        }
    }
    if (puntajeJugador > puntajeComputadora){
        console.log(`Ganaste el juego: ${puntajeJugador} - ${puntajeComputadora}`)
    }else if (puntajeJugador < puntajeComputadora){
        console.log(`Perdiste el juego: ${puntajeJugador} - ${puntajeComputadora}`)
    }else{
        console.log('empate')
    }
}

//LLAMAR A LA FUNCION
const jugador = document.getElementById('jugador')
const botonJugador = document.getElementById('btnPlayer')
botonJugador.addEventListener('click', ()=>{
    const valor = jugador.value
    console.log(valor)
})

function jugadorChoise (){
    botonJugador.addEventListener('click', ()=>{
        const valor = jugador.value
    })
    console.log(valor)  
}
if (jugador.value === ''){

}
