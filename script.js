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
    } else if (computerSelection === 'paper' && playerSelection === 'rock' || 
        computerSelection === 'scissor' && playerSelection === 'paper' ||
        computerSelection === 'rock' && playerSelection === 'scissor') {
        coronaScore ++;
        displayResult(`You lose! ${computerSelection} beats ${playerSelection}`);
        displayScore(coronaScore, playerScore);
    } else {
        playerScore ++;
        displayResult(`You won! ${playerSelection} beats ${computerSelection}`);
        displayScore(coronaScore, playerScore);
    }

    checkScoreReachLimit();
    
}

function decideWinner() {
    if (playerScore === coronaScore) {
        alert("It was a tie match!! Try again to defeat corona") ;
    } else if (coronaScore > playerScore) {
        alert("You lose!! Corona has captured all world :(")
    } else {
        alert("You Won!! Corona has leaved the world :)")
    }

    window.location.reload()
}

function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

function displayResult(result) {
    resultBox.textContent = '';
    resultBox.textContent = result;
}

function displayScore(coronaScore, playerScore) {
    coronaScoreSpan.textContent = coronaScore;
    playerScoreSpan.textContent = playerScore;
}

function checkScoreReachLimit() {
    if (coronaScore >= 5 || playerScore >= 5) setTimeout(decideWinner, 2    );
}

function showInstructions() {
    alert("Instructions :-\n1.You need to defeat corona virus by scoring 5 first\n2.If corona wins it will capture this world\n3. If you wins it will leave this world & everything becomes normal.\n Best of luck");
}
setTimeout(showInstructions, 500);
let playerScore = 0;
let coronaScore = 0;

const resultBox = document.querySelector('.results-box');
const coronaScoreSpan = document.querySelector('.corona-score');
const playerScoreSpan = document.querySelector('.player-score');
const buttons = document.querySelectorAll('.button');
buttons.forEach(btn => btn.addEventListener('click', () => playRound(computerPlay(), btn.classList[1])));