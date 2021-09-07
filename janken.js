function computerPlay() {
    
    // Contains the computer's move set
    const moveSet = ['Rock', 'Paper', 'Scissors']
    
    // Gets a random number between 0 inclusive and 9 inclusive (10 total integers)
    let index = Math.floor(Math.random()*10);
    
    /* Ensures evenness of computer moves since there would be 4 chances for Rock 
       to be played and 3 for Paper and Scissors if one value was not excluded*/
    while (index === 9) {
        index = Math.floor(Math.random()*10);
    }
    
    // Uses the remainder of division by 3 to choose the computer's move
    console.log(moveSet[index%3]);
}

computerPlay();