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
        return 'Ganaste'
    }else {
        return 'Perdiste!'
    }
}

function juego (){
    puntajeJugador = 0
    puntajeComputadora = 0

    for (let i = 0; i < 1; i++){
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

//Version2
// Obtener elementos del DOM
const juegoForm = document.getElementById("juegoForm");
const jugarBtn = document.getElementById("jugarBtn");
const resultado = document.getElementById("resultado");

//Muestra la eleccion de los jugadores
const imagenPlayer = document.getElementById("jugador")
const imagenCompu = document.getElementById("computadora")
function seleccionarImagen(opcion,elemento){
    if (opcion === 'piedra'){
        elemento.src = "./img/piedra.png"
    }else if (opcion === 'papel'){
        elemento.src = "./img/papel.png"       
    }else if (opcion === 'tijeras'){
        elemento.src = "./img/tijeras.png"
    }
}
// Función para jugar el juego
function jugar() {
    // Obtener la elección del usuario
    const eleccionUsuario = document.querySelector('input[name="eleccion"]:checked');
    const imagenJugador = document.getElementById('jugador')
    const imagenCompu = document.getElementById('computadora')

    if (eleccionUsuario) {
        eleccionCompu = opcionComputadora().toLocaleLowerCase()
        seleccionarImagen(eleccionCompu,imagenCompu)
        const eleccionUsuarioValue = eleccionUsuario.value.toLowerCase();
        seleccionarImagen(eleccionUsuarioValue,imagenPlayer)
        
        if (eleccionUsuarioValue === eleccionCompu){
            anuncio.textContent = "No lo haces mal"
            resultado.textContent = `Tu elección: ${eleccionUsuarioValue}, Resultado: EMPATE`
        }else if (
            (eleccionUsuarioValue === 'piedra') && (eleccionCompu === 'tijeras')||
            (eleccionUsuarioValue === 'tijeras') && (eleccionCompu === 'papel')||
            (eleccionUsuarioValue === 'papel') && (eleccionCompu === 'piedra')

        ){
            resultado.textContent = `Tu elección: ${eleccionUsuarioValue}, Resultado: GANASTE;`
            contadorClics++
            spanContadorPlayer.textContent = contadorClics
            anuncio.textContent = "Bien hecho, enseñale como se juega"
            return 'ganaste'

        }else{
            resultado.textContent = `Tu elección: ${eleccionUsuarioValue}, Resultado: PERDISTE`
            contadorClics++
            spanContadorCompu.textContent = contadorClics
            anuncio.textContent = 'La maquina esta ganando, la dejaras?'
            return 'perdiste'
        }
    } else {
        resultado.textContent = `Por favor, elige una opción antes de jugar.`;
    }
}
// Agregar evento click al botón "Jugar"
jugarBtn.addEventListener("click", jugar);
const spanContadorPlayer = document.getElementById('playercount')
const spanContadorCompu = document.getElementById('compucount')
const anuncio = document.getElementById('frase')
let contadorClics = 0

