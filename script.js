

function getComputerChoice(){

    let com = Math.floor(Math.random() * 3) + 1;

    if(com == 1){
        return "Rock";
    }
    else if(com == 2){
        return "Paper";
    }
    else if(com == 3){
        return "Scissors";
    }

}

function getHumanChoice(){

    let hum = prompt("Rock, Paper, Or Scissors?");

    return hum.slice(0,1).toUpperCase() + hum.slice(1).toLowerCase();
    
}


function playRound(humanChoice, computerChoice){

    if(humanScore == 5 || computerScore == 5){
        
    }
    else{
        if(humanChoice == computerChoice){
            console.log("It's a Tie");
            results.textContent = "It's a Tie! " + humanChoice + " is equal to " + computerChoice;
        }
        else if(humanChoice === "Rock" && computerChoice === "Paper"){
            computerScore++;
            console.log("You lose, Rock loses to Paper");
            results.textContent = "You lose, Rock loses to Paper";
        }
        else if(humanChoice === "Rock" && computerChoice === "Scissors"){
            humanScore++;
            console.log("You win, Rock beats Scissors");
            results.textContent = "You win, Rock beats Scissors";
        }
        else if(humanChoice === "Paper" && computerChoice === "Rock"){
            humanScore++;
            console.log("You win, Paper beats Rock");
            results.textContent = "You win, Paper beats Rock";
        }
        else if(humanChoice === "Paper" && computerChoice === "Scissors"){
            computerScore++;
            console.log("You lose, Paper loses to Scissors");
            results.textContent = "You lose, Paper loses to Scissors";
        }
        else if(humanChoice === "Scissors" && computerChoice === "Paper"){
            humanScore++;
            console.log("You win, Scissors beats Paper");
            results.textContent = "You win, Scissors beats Paper";
        }
        else if(humanChoice ==="Scissors" && computerChoice === "Rock"){
            computerScore++;
            console.log("You lose, Scissors loses to Rock");
            results.textContent = "You lose, Scissors loses to Rock";
        }

        scores.textContent = "Human: " + humanScore + " Computer: " + computerScore;

        if(humanScore == 5 || computerScore == 5){
            if(humanScore == 5){
                winner.textContent = "YOU WIN!!!";
            }
            else{
                winner.textContent = "You lose ):";
            }
        }

    }

}




let computerScore = 0;
let humanScore = 0;

const results = document.querySelector("#results");
const winner = document.querySelector("#winner");


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


rock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
});


let scores = document.createElement("p");
let scoreBoard = document.querySelector("#scoreBoard");


scoreBoard.appendChild(scores);




