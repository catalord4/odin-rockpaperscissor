

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const outcomeDisplay = document.querySelector("#outcome-display");

const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");

const questionMarkEmoji = playerChoice.textContent;
const rockEmoji = document.querySelector(".rock").textContent;
const paperEmoji = document.querySelector(".paper").textContent;
const scissorEmoji = document.querySelector(".scissor").textContent;


function displayChoice(display ,input){
    if(input == "ROCK")
    {
        display.textContent = rockEmoji;
    }
    else if(input == "PAPER")
    {
        display.textContent = paperEmoji;
    }
    else if(input == "SCISSOR")
    {
        display.textContent = scissorEmoji;
    }
}

let playerScoreValue = 0;
let computerScoreValue = 0;

function playRound(userInput)
{
    computerInput = generateComputerInput();
    outcome = getResults(userInput, computerInput);

    displayChoice(playerChoice, userInput);
    displayChoice(computerChoice, computerInput);
    outcomeDisplay.textContent = outcome;

    if(outcome.includes("PLAYER WIN"))
    {
        playerScoreValue++;
        playerScore.textContent = playerScoreValue; 

    }
    else if(outcome.includes("COMPUTER WIN"))
    {
        computerScoreValue++;
        computerScore.textContent = computerScoreValue;
    }

    checkGameState(playerScoreValue, computerScoreValue);
}

const modal = document.querySelector("#modal");
const modalMessage = document.querySelector("#endgame-outcome");
const overlay = document.querySelector("#overlay");
const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", resetGameState);

function checkGameState(playerScore, computerScore)
{
    if(playerScore >= 3 && (playerScore - computerScore) >= 2)
    {
        displayModal("YOU WON!");
    }
    else if(computerScore >= 3 && (computerScore - playerScore) >= 2)
    {
        displayModal("YOU LOST!");
    }
}

function displayModal(message)
{

    modal.classList.toggle(("active"));
    overlay.classList.toggle(("active"));
    modalMessage.textContent = message;
}



function resetGameState(){

    resetUI();
    resetScore();
}

function resetScore()
{
    playerScoreValue = 0;
    computerScoreValue = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}

function resetUI()
{
    outcomeDisplay.textContent = "Best of five wins \r\n Good Luck ";

    playerChoice.textContent = questionMarkEmoji;
    computerChoice.textContent = questionMarkEmoji;
    
    modal.classList.toggle(("active"));
    overlay.classList.toggle(("active"));
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");

rockButton.addEventListener("click",() => playRound("ROCK"));
paperButton.addEventListener("click",() => playRound("PAPER"));
scissorButton.addEventListener("click",() => playRound("SCISSOR"));