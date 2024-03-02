let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;
let gameover = 0;



let container = document.querySelector('.container');
let playerScoreText = document.querySelector('.playerScore');
let computerScoreText = document.querySelector('.computerScore');
let playerSelect = document.querySelector('.playerSelect');
let compSelect = document.querySelector('.compSelect');
let final = document.querySelector('.final');
let roundResult = document.querySelector('.roundResult');


container.addEventListener('click', (event) => {
    if (gameover === 1) {
        computerScore = 0;
        playerScore = 0;
        final.textContent = '';
        gameover = 0;
    } 
        let target = event.target;
        playerChoice = target.textContent;
        computerChoice = getComputerChoice();
        let result = playRound(computerChoice, playerChoice);

        switch(result) {
            case 'draw':
                roundResult.textContent = 'Draw!';
                break;
            case 'win':
                playerScore+=1;
                roundResult.textContent = 'Player Wins!';                
                break;
            case 'loss':
                computerScore+=1;
                roundResult.textContent = 'Computer Wins';
                break;
            default:
                console.log('oops');
        }

        playerScoreText.textContent = 'Player Score: ' + playerScore;
        computerScoreText.textContent = 'Computer Score: ' + computerScore;
        playerSelect.textContent = 'Player Selection: ' + playerChoice;
        compSelect.textContent = 'Computer Selection: ' + computerChoice;

        if (playerScore == 5) {
            gameover = 1;
            final.textContent = "You Win!!";
        } else if (computerScore == 5) {
            gameover = 1;
            final.textContent = "Computer Wins";
        }
        

    
    
  

});
    
function getComputerChoice () {
    let choices = ["Rock","Paper","Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

function playRound (computerChoice, playerChoice) {
    
    
    if (computerChoice === playerChoice) {
        return 'draw';  
    }
    else if ((computerChoice === "Rock" && playerChoice === "Paper") || (computerChoice === "Scissors" && playerChoice === "Rock") || (computerChoice === "Paper" && playerChoice === "Scissors")) {
        return 'win';
    }
    else {
        return 'loss';
        
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
