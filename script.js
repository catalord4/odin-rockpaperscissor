function generateComputerAnswer() {
    return Math.floor(Math.random() * 3);
}

/* Rock = 1
   Paper = 2
   Scissor = 3

*/

function getResults(playerInput, computerInput) {
    if(playerInput == computerInput)
    {
        return 0;
    }
    else if(playerInput == 1 && computerInput == 2)
    {
        return -1;
    }
    else if(playerInput == 1 && computerInput == 3)
    {
        return 1;
    }
    else if(playerInput == 2 && computerInput == 1)
    {
        return 1;
    }
    else if(playerInput == 2 && computerInput == 3)
    {
        return -1;
    }
    else if(playerInput == 3 && computerInput == 2)
    {
        return 1;
    }
    else if(playerInput == 3 && computerInput == 1)
    {
        return -1;
    }

    return 0;
}

function outputResult(gameResult)
{
    if(gameResult > 1 || gameResult < -1)
    {
        return;
    }

    switch (gameResult) {
        case 1:
            console.log(`You won!`);
            break;
        case 0:
            console.log(`It's a draw!`);
            break;
        case -1:
            console.log(`You lost!`);
            break;
        default:
            break;
    }
}

function convertTextInputToNumber(input) {

    input = input.toLowerCase();
    
    switch (input) {
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissor":
            return 3;
        default:
            return 0;
    }
}

function playRound()
{
    let playerInput = prompt("Pick rock paper or scissor");
    playerInput = convertTextInputToNumber(playerInput);
    let result = getResults(playerInput, generateComputerAnswer());
    outputResult(result);
    return result;
}

function playGame(bestOf)
{
    let score = 0;

    for (let index = 0; index < bestOf; index++) {
        result = playRound();
        score += result;
        console.log(score);
        if(score == Math.ceil(bestOf / 2))
        {
            console.log("You won the game!");
            return;
        }
        else if( score == -Math.ceil(bestOf/ 2))
        {
            console.log("You lost the game!");
            return;
        }
    }

    if(score > 0)
    {
        console.log("You won the game!")
    }
    else if(score == 0)
    {
        console.log("Its a draw!")
    }
    else if( score < 0)
    {
        console.log("You lost the game!")

    }
}

