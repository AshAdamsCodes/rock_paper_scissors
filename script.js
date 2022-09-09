//randomly return either "Rock", "Paper", or "Scissors"
function getComputerChoice(){
    randomNum = Math.floor(Math.random()*3);
    if(randomNum === 0){
        return "Rock";
    }else if(randomNum === 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}

//Assign the random selection of "Rock", "Paper", or "Scissors" to a variable
//let computerSelection = getComputerChoice(); 

//Take the player's selection
//let playerSelection = prompt("Make Your Selection: ");


//Make it so that the player Selection is case-insensitive

//Take the player's selection and the computers random choice and play Rock, Paper, Scissors
//Return the winner
function roshambo() {
    computerSelection = getComputerChoice().toUpperCase(); 
    //let playerSelection = prompt("Make Your Selection: ").toUpperCase();
    //playerSelection = playerSelection.toUpperCase();
    //console.log(`Player Selection: ${playerSelection}`)
    //computerSelection = computerSelection.toUpperCase();
    console.log(`Computer Selection: ${computerSelection}`);
    console.log(`Player Selection: ${playerSelection}`);

    if(computerSelection === "ROCK" && playerSelection === "ROCK"){
        return "It's a tie";
    }else if(computerSelection === "ROCK" && playerSelection === "PAPER"){
        return "Player Wins!";
    }else if(computerSelection === "ROCK" && playerSelection === "SCISSORS"){
        return "Computer Wins!";
    }else if(computerSelection === "PAPER" && playerSelection === "PAPER"){
        return "It's a tie!"
    }else if(computerSelection === "PAPER" && playerSelection === "SCISSORS"){
        return "Player Wins!";
    }else if(computerSelection === "PAPER" && playerSelection === "ROCK"){
        return "Computer Wins!";
    }else if(computerSelection === "SCISSORS" && playerSelection === "SCISSORS"){
        return "It's a tie!";
    }else if(computerSelection === "SCISSORS" && playerSelection === "ROCK"){
        return "Player Wins!";
    }else if(computerSelection === "SCISSORS" && playerSelection === "PAPER"){
        return "Computer Wins!";
    }
  }

  //Have players play Roshambo 5 times
  //Keep score of how many times computer and user win a round
  //Create a conditional to indicate who won the game of 5 rounds
function game() {
    computerTally = 0; 
    playerTally = 0; 

    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Make Your Selection: ").toUpperCase();
        roshambo();
        
        if(computerSelection === "ROCK" && playerSelection === "PAPER"){
            playerTally++;
        }else if(computerSelection === "ROCK" && playerSelection === "SCISSORS"){
            computerTally++;
        }else if(computerSelection === "PAPER" && playerSelection === "SCISSORS"){
            playerTally++;
        }else if(computerSelection === "PAPER" && playerSelection === "ROCK"){
            computerTally++;
        }else if(computerSelection === "SCISSORS" && playerSelection === "ROCK"){
            playerTally++;
        }else if(computerSelection === "SCISSORS" && playerSelection === "PAPER"){
            computerTally++;
        }
        console.log(`Computer: ${computerTally}, Player: ${playerTally}`);
    }

    if(playerTally > computerTally){
        return "Player Wins!";
    }else if(computerTally > playerTally){
        return "Computer Wins!";
    }else{
        return "Tie! 1 more round!";
    }

}



//console.log(`Computer Selection: ${computerSelection}`);
//console.log(`Player Selection: ${playerSelection}`);
//console.log(roshambo());

console.log(game());