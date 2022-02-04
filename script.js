function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(computerSelection, playerSelection) {
   if (computerSelection === 'paper' && playerSelection === 'paper' ||
        computerSelection === 'scissor' && playerSelection === 'scissor' ||
        computerSelection === 'rock' && playerSelection === 'rock') {
        displayResult(`It's a tie! ${computerSelection} never beats ${playerSelection}`);
   }
    else if (computerSelection === 'paper' && playerSelection === 'rock' || 
            computerSelection === 'scissor' && playerSelection === 'paper' ||
            computerSelection === 'rock' && playerSelection === 'scissor') {
            computerScore ++;
            displayResult(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else {
        playerScore ++;
        displayResult(`You won! ${playerSelection} beats ${computerSelection}`);
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

function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

function displayResult(result) {
    const resultBox = document.querySelector('.results-box');
    resultBox.textContent = '';
    resultBox.textContent = result;
    resultBox.appendChild(para)

    
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.button');
buttons.forEach(btn => btn.addEventListener('click', () => playRound(computerPlay(), btn.classList[1])));
