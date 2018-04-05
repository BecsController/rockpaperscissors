document.addEventListener('DOMContentLoaded', start)

function start() {


let options = ["rock", "paper", "scissors"];


function computerPlay (){
  let arrayPosition = Math.floor(Math.random()*2);
  let computerSelection = options.arrayPosition;
  alert("Computer plays " + computerSelection);
}

function playRound(playerSelection, computerSelection){
 switch(){
   case 'rock':
   if (computerSelection === 'paper'){
     result = 'Paper covers rock!  One for the Comp!';
     roundCountComp++;
   } else if (computerSelection === 'scissors'){
     result = 'Rock breaks scissors!  One for the challenger!';
     roundCountPlayer++;
   } else {
     result = 'Tied!';
   } break;
   case 'paper':
   if (computerSelection === 'scissors'){
     result = 'Scissors cuts paper! One for the Comp!';
     roundCountComp++;
   }else if (computerSelection === 'rock'){
     result = 'Paper covers rock!  One for the challenger!';
     roundCountPlayer++;
   } else{
     result = 'A draw!';
   } break;
   case 'scissors':
   if (computerSelection === 'rock'){
     result = 'Rock breaks scissors!  One for the comp!';
     roundCountComp++;
   } else if (computerSelection === 'paper'){
     result = 'Scissors cut paper!  One for the challenger!';
     roundCountPlayer++;
   } else{
     result = 'No winner today';
   }
 }
}
function game(){
  let roundCountPlayer = 0;
  let roundCountComp = 0;

  let playerSelection = prompt("Okay, Rock, Paper, Scissors is on!  What's your move cowboy?");
  const computerSelection = computerPlay ();
console.log(playRound(playerSelection, computerSelection));
}

}
