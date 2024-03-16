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

function getResults(userInput, computerInput){

    if(userInput == computerInput)
    {
        return "DRAW \r\n" + userInput + " TIES WITH " + computerInput;
    }
    else if(userInput == "ROCK" && computerInput=="PAPER")
    {
        return "COMPUTER WINS \r\n PAPER BEATS ROCK";
    }
    else if(userInput == "PAPER" && computerInput=="SCISSOR")
    {
        return "COMPUTER WINS \r\n PAPER BEATS SCISSOR";
    }
    else if(userInput == "SCISSOR" && computerInput=="ROCK")
    {
        return "COMPUTER WINS \r\n ROCK BEST SCISSOR";
    }
    else if(userInput == "ROCK" && computerInput=="SCISSOR")
    {
        return "PLAYER WINS \r\n ROCK BEATS SCISSOR";
    }
    else if(userInput == "SCISSOR" && computerInput=="PAPER")
    {
        return "PLAYER WINS \r\n SCISSOR BEATS PAPER";
    }
    else if(userInput == "PAPER" && computerInput=="ROCK")
    {
        return "PLAYER WINS \r\n PAPER BEATS ROCK";
    }

}

