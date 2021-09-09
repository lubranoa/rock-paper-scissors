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
    
    // If the computer won, returns 0
    if ((playerSelection == 'Rock' && computerSelection == 'Paper') || 
            (playerSelection == 'Paper' && computerSelection == 'Scissors') || 
            (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
        return 0;
    
    // Else, if the player won, return 1
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || 
            (playerSelection == 'Paper' && computerSelection == 'Rock') || 
            (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        return 1;
    
    // Otherwise, it was a tie and returns -1
    } else {
        return -1;
    }
}

function isValidMove(playerSelection) {
    let validMoves = ['rock', 'paper', 'scissors']
    
    // If the player's selection is in the valid moveset array, returns the move
    if (validMoves.includes(playerSelection) == true) {
        return playerSelection;
    // Otherwise, recursively calls this function until a valid input is entered
    } else {
        playerMove = prompt('Invalid move. Please try again.');
        isValidMove(playerMove.toLowerCase());
    }

    return playerMove;
}

function game() {
    
    // Init counters for the number of rounds, wins, and ties
    let roundCounter = 0;
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    
    // Iterates for 5 rounds
    while (roundCounter < 5) {
        
        // Prompts the player for a move and checks validity
        let playerMove = prompt(`Round ${roundCounter+1} of 5. Please enter a move.`);
        playerMove = isValidMove(playerMove.toLowerCase());
        
        // Standardizes capitalization of player's move
        const playerChoice = playerMove.charAt(0).toUpperCase() + playerMove.slice(1);
        // Generates the computer's move
        const computerMove = computerPlay();
        
        // Gets and holds this round's result
        roundResult = playRound(playerChoice, computerMove);
        
        // If the computer won the round, increments counters and alerts player of lost round
        if (roundResult == 0) {
            computerWins += 1;
            roundCounter += 1;
            alert(`Round ${roundCounter} lost! ${computerMove} beats ${playerMove}!`);
        // Else, if the player won it, increments counters and alerts player of won round
        } else if (roundResult == 1) {
            playerWins += 1;
            roundCounter += 1;
            alert(`Round ${roundCounter} won! ${playerMove} beats ${computerMove}!`);
        // Otherwise, increments counters and alerts player of tied round
        } else {
            ties += 1;
            roundCounter += 1;
            alert(`Round ${roundCounter} tied!`);
        }
    }
    
    // After 5 rounds have been played, alerts the player whether they tied, lost, or won the game
    if (playerWins == computerWins) {
        alert(`Game Over! You tied the computer with ${playerWins} wins each and ${ties} ${(ties == 1) ? 'tie' : 'ties'}!`);
    } else if (playerWins < computerWins) {
        alert(`Game Over! You lost to the computer ${computerWins} wins to ${playerWins} with ${ties} ${(ties == 1) ? 'tie' : 'ties'}!`);
    } else {
        alert(`YOU WON! You beat the computer ${playerWins} wins to ${computerWins} with ${ties} ${(ties == 1) ? 'tie' : 'ties'}!`);
    }
}

game();