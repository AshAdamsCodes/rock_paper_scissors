//Have computer randomly return either "Rock", "Paper", or "Scissors"
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


//Take the player's selection and the computers random choice and play Rock, Paper, Scissors
//Return the winner of the round
function roshambo(){

    //Display the computer selection and player selection in DOM
    const container = document.querySelector("#container");
    let select = document.createElement('div');
    select.textContent = `Computer Selection: ${computerSelection} ` + `Player Selection: ${playerSelection}`;
    container.appendChild(select);

    //Diplay winner of round in DOM
    let content = document.createElement('div');
    content.classList.add('content')
    if(computerSelection === "ROCK" && playerSelection === "ROCK"){
        content.textContent =  "It's a tie!";
    }else if(computerSelection === "ROCK" && playerSelection === "PAPER"){
        content.textContent = "Player Wins! " ;
    }else if(computerSelection === "ROCK" && playerSelection === "SCISSORS"){
        content.textContent = "Computer Wins! ";
    }else if(computerSelection === "PAPER" && playerSelection === "PAPER"){
        content.textContent = "It's a tie! ";
    }else if(computerSelection === "PAPER" && playerSelection === "SCISSORS"){
        content.textContent = "Player Wins! " ; 
    }else if(computerSelection === "PAPER" && playerSelection === "ROCK"){
        content.textContent = "Computer Wins! ";
    }else if(computerSelection === "SCISSORS" && playerSelection === "SCISSORS"){
        content.textContent = "It's a tie! ";
    }else if(computerSelection === "SCISSORS" && playerSelection === "ROCK"){
        content.textContent = "Player Wins! ";
    }else if(computerSelection === "SCISSORS" && playerSelection === "PAPER"){
        content.textContent = "Computer Wins! ";
    }
    container.appendChild(content);
     
  }

  //Have players play Roshambo 5 times
  //Keep score of how many times computer and user win a round
  //Create a conditional to indicate who won the game of 5 rounds
function game() {

    //set beginning score of computer and player to 0
    computerTally = 0; 
    playerTally = 0; 
    
    //Have a round of roshambo play every time player click the button "rock", "paper", or "scissors"
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id.toUpperCase(); 
            computerSelection = getComputerChoice().toUpperCase();
            
            roshambo();

            //Tally the score of each round
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

            //Display tally to DOM after each round of roshambo
            const container = document.querySelector("#container");
            let tally = document.createElement('div');
            tally.textContent = `Computer: ${computerTally}, Player: ${playerTally}`;
            container.appendChild(tally);
        
            //Display winner of entire game
            let displayWinner = document.createElement('div');
            if(computerTally === 5){
                displayWinner.textContent = "GAME OVER! COMPUTER WINS";
                container.appendChild(displayWinner);
                return; 
            }else if(playerTally === 5){
                displayWinner.textContent = "GAME OVER! PLAYER WINS";
                container.appendChild(displayWinner);
                return; 
            }
            //container.appendChild(displayWinner);

    
        })
    });
}

game();
