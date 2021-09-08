function computerPlay() {
    
    // Contains the computer's move set
    const moveSet = ['Rock', 'Paper', 'Scissors'];
    
    // Gets a random number between 0 inclusive and 9 inclusive (10 total integers)
    let index = Math.floor(Math.random()*10);
    
    /* Ensures evenness of computer moves since there would be 4 chances for Rock 
       to be played and 3 for Paper and Scissors if one value was not excluded*/
    while (index === 9) {
        index = Math.floor(Math.random()*10);
    }
    
    // Uses the remainder of division by 3 to choose the computer's move
    return moveSet[index%3];
}

function playRound(playerSelection, computerSelection) {
    
    // Standardizes capitalization of player's move
    let playerMove = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log(playerMove);
    
    if ((playerMove == 'Rock' && computerSelection == 'Paper') 
    || (playerMove == 'Paper' && computerSelection == 'Scissors') 
    || (playerMove == 'Scissors' && computerSelection == 'Rock')) {
        return `You Lose! ${computerSelection} beats ${playerMove}`;
    
    } else if ((playerMove == 'Rock' && computerSelection == 'Scissors') 
    || (playerMove == 'Paper' && computerSelection == 'Rock') 
    || (playerMove == 'Scissors' && computerSelection == 'Paper')) {
        return `You Win! ${playerMove} beats ${computerSelection}`;
    
    } else {
        return `You tied this round!`;
    }
}

const playerMove = 'rock';
const computerMove = computerPlay();

console.log(playRound(playerMove, computerMove));