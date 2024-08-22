

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

    if(humanChoice == computerChoice){
        console.log("It's a Tie");
    }
    else if(humanChoice === "Rock" && computerChoice === "Paper"){
        computerScore++;
        console.log("You lose, Rock loses to Paper");
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors"){
        humanScore++;
        console.log("You win, Rock beats Scissors");
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock"){
        humanScore++;
        console.log("You win, Paper beats Rock");
    }
    else if(humanChoice === "Paper" && computerChoice === "Scissors"){
        computerScore++;
        console.log("You lose, Paper loses to Scissors");
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        humanScore++;
        console.log("You win, Scissors beats Paper");
    }
    else if(humanChoice ==="Scissors" && computerChoice === "Rock"){
        computerScore++;
        console.log("You lose, Scissors loses to Rock");
    }

    console.log("Human: " + humanScore +"   Computer: " + computerScore);
    console.log("");

}




let computerScore = 0;
let humanScore = 0;



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







