function computerPlay() {
    /*
        Randomly choose between rock,paper,scissor and return it
    */
    let choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(computerSelection, playerSelection) {
    /*
        Decide who has won and return message accordingly
    */
   if (computerSelection === 'paper' && playerSelection === 'paper' ||
        computerSelection === 'scissor' && playerSelection === 'scissor' ||
        computerSelection === 'rock' && playerSelection === 'rock') {
            return `It's a tie! ${computerSelection} never beats ${playerSelection}`;
   }
    else if (computerSelection === 'paper' && playerSelection === 'rock' || 
            computerSelection === 'scissor' && playerSelection === 'paper' ||
            computerSelection === 'rock' && playerSelection === 'scissor') {
                computerScore ++;
                return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        playerScore ++;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
}

function decideWinner() {
    if (playerScore === computerScore) {
        console.log(`That was a tie!! Your Score: ${playerScore} Computer Score: ${computerScore}`) ;
    } else if (computerScore > playerScore) {
        console.log(`You lose!! Your Score: ${playerScore} Computer Score: ${computerScore}`)
    } else {
        console.log(`You won!! Your Score: ${playerScore} Computer Score: ${computerScore}`)
    }

    playerScore = 0;
    computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => button.addEventListener('click', () => playRound(computerPlay(), button.id)));
// decideWinner();