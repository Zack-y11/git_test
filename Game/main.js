// Aqui la computadora elige una de las 3 opciones
function getComputerChoice(){
    const opciones = ['Piedra', 'Papel', 'Tijeras']
    return opciones[Math.floor(Math.random()*3)];

}

// Una funcion donde se juegan las rondas y se hacen las decisiones logicas
function JugarRonda(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection.toLowerCase()){
        return 'Empate!';
    } else if (
        (playerSelection === 'piedra') && (computerSelection === 'Tijeras') ||
        (playerSelection === 'papel') && (computerSelection === 'Piedra') ||
        (playerSelection === 'tijeras') && (computerSelection === 'Papel')
    ) {
        return 'Ganaste!'
    } else {
        return 'Perdiste!'
    }
}
//La funcion que alberga el juego en si y se activa
function game (){
    let playerScore = 0
    let computerScore = 0

//Este for ejecuta las 5 rondas    
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Elige Piedra, Papel o Tijeras")
        computerSelection = getComputerChoice();
        console.log('Elegiste', playerSelection)
        console.log("La computadora elegio", computerSelection)
        const resultado = JugarRonda(playerSelection, computerSelection);
        console.log(resultado)

        if (resultado === 'Ganaste!'){
            playerScore ++;
        }else if (resultado === 'Perdiste!'){
            computerScore ++;
        }
    }

//Aqui se decide quien gana definitivamente 
    if (playerScore > computerScore){
        console.log('Ganaste el juego')
    }else if (playerScore < computerScore){
        console.log('Perdiste el juego')
    }else {
        console.log('Empate en el juego')
    }

}

game()

