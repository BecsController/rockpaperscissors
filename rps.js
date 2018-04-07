document.addEventListener('DOMContentLoaded', start)

function start() {

  var rockButton = document.getElementsByClassName("rock")[0];
  var paperButton = document.getElementsByClassName("paper")[0];
  var scissorsButton = document.getElementsByClassName("scissors")[0];

  rockButton.addEventListener("click", function() {
  let playerSelection = 'rock';
  computerPlay()
});
  paperButton.addEventListener("click", function() {
  let playerSelection = 'paper';
  computerPlay()
});
  scissorsButton.addEventListener("click", function() {
  let playerSelection = 'scissors';
  computerPlay()
});

}

let options = ["rock", "paper", "scissors"];

  function computerPlay (){
    let arrayPosition = Math.floor(Math.random()*2);
    let computerSelection = options[arrayPosition];
    alert("Computer plays " + computerSelection);
    playRound()
  }

let result = getElementById("result").innerHTML;

  function playRound(playerSelection, computerSelection){
   switch(playerSelection){
     case 'rock':
     if (computerSelection === 'paper'){
       result = 'Paper covers rock!  One for the Comp!';
       result.classList.toggle('invisible');
       roundCountComp++;
     } else if (computerSelection === 'scissors'){
       result = 'Rock breaks scissors!  One for the challenger!';
       result.classList.toggle('invisible');
       roundCountPlayer++;
     } else {
       result = 'Tied!';
       result.classList.toggle('invisible');
     } break;
     case 'paper':
     if (computerSelection === 'scissors'){
       result = 'Scissors cuts paper! One for the Comp!';
       result.classList.toggle('invisible');
       roundCountComp++;
     }else if (computerSelection === 'rock'){
       result = 'Paper covers rock!  One for the challenger!';
       result.classList.toggle('invisible');
       roundCountPlayer++;
     } else{
       result = 'A draw!';
       result.classList.toggle('invisible');
     } break;
     case 'scissors':
     if (computerSelection === 'rock'){
       result = 'Rock breaks scissors!  One for the comp!';
       result.classList.toggle('invisible');
       roundCountComp++;
     } else if (computerSelection === 'paper'){
       result = 'Scissors cut paper!  One for the challenger!';
       result.classList.toggle('invisible');
       roundCountPlayer++;
     } else{
       result = 'No winner today';
       result.classList.toggle('invisible');
     }
   }
  }
