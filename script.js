let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let compScore = 0;



let btn = document.querySelector('button');
console.log(typeof(btn));

btn.addEventListener('click', () => {
    console.log('hello');
    
    // playerChoice = btn.textContent;
    // console.log(playerChoice);
    // computerChoice = getComputerChoice();
    // let result = playRound(playerChoice, compChoice);
    
    // switch(result) {
    //     case 'draw':
    //         //code
    //     case 'win':
    //         //code
    //     case 'lose':
    //         //code
    //     default:
    //         //code      
    // }


});
    
function getComputerChoice () {
    let choices = ["Rock","Paper","Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

function playRound (computerChoice, playerChoice) {
    
    
    if (computerChoice === playerChoice) {
        result = "Draw";
        draw = draw+1;
        return result;
        
    }
    else if ((computerChoice === "ROCK" && playerChoice === "PAPER") || (computerChoice === "SCISSORS" && playerChoice === "ROCK") || (computerChoice === "PAPER" && playerChoice === "SCISSORS")) {
        result = "You Win! " + playerChoice +" beats " + computerChoice +"!";
        win = win+1;
        return result;
        
    }
    else {
        result = "Computer Wins. " + computerChoice + " beats " + playerChoice + ".";
        loss = loss+1;
        return result;
        
    }   
}

//let win=0;
//let draw=0;
//let loss=0;

//function playGame () {
//     win = 0;
//     loss = 0;
//     draw = 0;

//     for (i=1; i<=5; i++) {
//       let computerChoice = getComputerChoice().toUpperCase();
//       let playerChoice = prompt("Please choose Rock, Paper, or Scissors","Rock").toUpperCase();
//       playRound(computerChoice, playerChoice);
//       console.log(result);
        
//     }

//     if (win > loss) {
//         return "You win the game!";
//     }
//     else if (loss > win) {
//         return "The computer wins this time!";
//     }
//     else if (loss === win) {
//         return "Its a draw! You and the computer tied"
//     }

// }
