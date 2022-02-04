function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(computerSelection, playerSelection) {
   if (computerSelection === 'paper' && playerSelection === 'paper' ||
        computerSelection === 'scissor' && playerSelection === 'scissor' ||
        computerSelection === 'rock' && playerSelection === 'rock') {
        displayResult(`It's a tie! ${computerSelection} never beats ${playerSelection}`);
        displayScore(coronaScore, playerScore);
   }
    else if (computerSelection === 'paper' && playerSelection === 'rock' || 
            computerSelection === 'scissor' && playerSelection === 'paper' ||
            computerSelection === 'rock' && playerSelection === 'scissor') {
            coronaScore ++;
            displayResult(`You lose! ${computerSelection} beats ${playerSelection}`);
            displayScore(coronaScore, playerScore);
    }
    else {
        playerScore ++;
        displayResult(`You won! ${playerSelection} beats ${computerSelection}`);
        displayScore(coronaScore, playerScore);
    }
}

function decideWinner() {
    if (playerScore === coronaScore) {
        console.log(`That was a tie!! Your Score: ${playerScore} Computer Score: ${coronaScore}`) ;
    } else if (coronaScore > playerScore) {
        console.log(`You lose!! Your Score: ${playerScore} Computer Score: ${coronaScore}`)
    } else {
        console.log(`You won!! Your Score: ${playerScore} Computer Score: ${coronaScore}`)
    }

    playerScore = 0;
    coronaScore = 0;
}

function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

function displayResult(result) {
    const resultBox = document.querySelector('.results-box');
    resultBox.textContent = '';
    resultBox.textContent = result;
}

function displayScore(coronaScore, playerScore) {
    const coronaScoreSpan = document.querySelector('.corona-score');
    const playerScoreSpan = document.querySelector('.player-score');
    coronaScoreSpan.textContent = coronaScore;
    playerScoreSpan.textContent = playerScore;
}

let playerScore = 0;
let coronaScore = 0;

const buttons = document.querySelectorAll('.button');
buttons.forEach(btn => btn.addEventListener('click', () => playRound(computerPlay(), btn.classList[1])));
