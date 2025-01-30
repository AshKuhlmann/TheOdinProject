const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

/**
 * Randomly returns rock, paper, or scissors 
 * string 
 */
function getComputerChoice() {
    randIndex = (Math.round(Math.random() * 100)) % 3;
    console.log(randIndex)
    return options[randIndex];
}

/**
 * Prompts user for choice of rock, paper,
 * or scissors
 */
function getHumanChoice() {
    let message = "Please choose rock, paper, or scissors:"
    let input = prompt(message);

    if (input.length == 0) {
        console.log("Error: empty string submitted.")
    }
    else if (!options.includes(input.toLowerCase())) {
        console.log("Error: please pick rock, paper, or scissors.")
    }
    else {
        return input.toLowerCase();
    }
}

/**
 * 
 * @param {*} playerChoice the player's choice of rock, paper, or scissors
 * @param {*} computerChoice the computer's choice of rock, paper, or scissors
 */
function determineWinner(playerChoice, computerChoice) {
    const outcomes = {
        rock: { scissors: "win", paper: "lose" },
        paper: { rock: "win", scissors: "lose" },
        scissors: { paper: "win", rock: "lose" },
    };

    if (playerChoice === computerChoice) {
        return "tie";
    }
    
    return outcomes[playerChoice][computerChoice] || "Invalid input"; // Handle invalid inputs
}

function incrementScore(outcome) {
    if (outcome == "tie") {
        console.log("Tie! Neither player earns points");
        return;
    }
    else if (outcome == "win") {
        humanScore++;
        console.log("You win!");
        console.log("Human score now: " + humanScore);
    }
    else if (outcome == "lose") {
        computerScore++;
        console.log("You lose :/");
        console.log("Computer score now: " + humanScore);
    }
}

let playerChoice, computerChoice, outcome;

while (true) {
    playerChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    outcome = determineWinner(playerChoice, computerChoice);
    incrementScore(outcome);
}

