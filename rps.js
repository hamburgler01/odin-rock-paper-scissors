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
            scoreComputer++;
            return "You lose - " + computerSelection + " beats " + playerSelection;
    }

    scorePerson++;
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

function buttonClick(e) {
    let playerSelection = e.target.textContent;
    if (playerSelection && playerSelection != QUIT) {
        let result= playRound(playerSelection, computerPlay());
        document.querySelector('#result').textContent = result;

        document.querySelector('.score #score-person').textContent = scorePerson.toString();
        document.querySelector('.score #score-computer').textContent = scoreComputer.toString();

        if (scorePerson >= 5 || scoreComputer >= 5) {
            if (scorePerson >= 5) {
                document.querySelector('#winner').textContent = "You win";
            } else {
                document.querySelector('#winner').textContent = "Computer wins";
            }
            scorePerson = 0;
            scoreComputer = 0;

            document.querySelector('.score #score-person').textContent = scorePerson.toString();
            document.querySelector('.score #score-computer').textContent = scoreComputer.toString();
        } else {
            document.querySelector('#winner').textContent = "No winner yet";
        }
    }
}

let scorePerson = 0;
let scoreComputer = 0;

buttons = document.querySelectorAll('button');
buttons.forEach(element => {
    element.addEventListener('click', buttonClick);
});

/*
for (let i = 0; i < 5; ++i) {
    if (!game()) {
        break;
    };
}
*/