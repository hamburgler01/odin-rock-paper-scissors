const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const QUIT = "Q";

function computerPlay() {
    const result = Math.round(Math.random() * 2);
    return result == 0 ? ROCK : result == 1 ? PAPER : SCISSORS;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();

    if (playerSelection == computerSelection) {
        return "Tie - both chose " + playerSelection;
    }

    if (playerSelection == ROCK     && computerSelection == PAPER    ||
        playerSelection == PAPER    && computerSelection == SCISSORS ||
        playerSelection == SCISSORS && computerSelection == ROCK) {
            return "You lose - " + computerSelection + " beats " + playerSelection;
    }

    return "You win - " + playerSelection + " beats " + computerSelection;
}

function checkValidityOfInput(playerSelection) {
    if (playerSelection == null) {
        return QUIT;
    }
    
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();

    if (![ROCK, PAPER, SCISSORS, QUIT].includes(playerSelection)) {
        return false;
    }

    return playerSelection;
}

function getPlayerInput() {
    console.log("----> getPlayerInput");
    playerSelectionRaw = prompt("Enter your choice (Rock, Paper, or Scissors) or q to quit");
    playerSelection = checkValidityOfInput(playerSelectionRaw);

    while (!playerSelection) {
        playerSelection = prompt(`Your input of ${playerSelectionRaw} was invalid.  Enter your choice (Rock, Paper, or Scissors`);
        playerSelection = checkValidityOfInput(playerSelection);
    }

    return playerSelection;
}

function game() {
    playerInput = getPlayerInput();
    if (playerInput != QUIT) {
        alert(playRound(playerInput, computerPlay()));
        return true;
    } else {
        return false;
    }
}

for (let i = 0; i < 5; ++i) {
    if (!game()) {
        break;
    };
}
