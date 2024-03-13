function getUserInput() {
    return prompt("Rock, Paper , Scissor?!").toUpperCase();
}

function generateComputerInput() {
    let choice = Math.ceil(Math.random() * 3);
    switch (choice) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER"
        case 3:
            return "SCISSOR"
    }
    return 0;
}

function playRound(userInput, computerInput){
    if(userInput == computerInput)
    {
        return "DRAW";
    }
    else if(userInput == "ROCK" && computerInput=="PAPER")
    {
        return "COMPUTER WIN";
    }
    else if(userInput == "PAPER" && computerInput=="SCISSOR")
    {
        return "COMPUTER WIN";
    }
    else if(userInput == "SCISSOR" && computerInput=="ROCK")
    {
        return "COMPUTER WIN";
    }
    else if(userInput == "ROCK" && computerInput=="SCISSOR")
    {
        return "PLAYER WIN";
    }
    else if(userInput == "SCISSOR" && computerInput=="PAPER")
    {
        return "PLAYER WIN";
    }
    else if(userInput == "PAPER" && computerInput=="ROCK")
    {
        return "PLAYER WIN";
    }

}

function PLAY() {
    let input = getUserInput();
    return playRound(input, generateComputerInput());
}