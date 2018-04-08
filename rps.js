document.addEventListener('DOMContentLoaded', start);

function start() {

  var rockButton = document.getElementsByClassName("rock")[0];
  var paperButton = document.getElementsByClassName("paper")[0];
  var scissorsButton = document.getElementsByClassName("scissors")[0];
  let computerSelection = "rock";
  let playerSelection = "rock";

  rockButton.addEventListener("click", function() {
  let playerSelection = "rock";
  alert("Player Chooses " + playerSelection);
  computerPlay();
});
  paperButton.addEventListener("click", function() {
  let playerSelection = "paper";
  alert("Player Chooses " + playerSelection);
  computerPlay();
});
  scissorsButton.addEventListener("click", function() {
  let playerSelection = "scissors";
  alert("Player Chooses " + playerSelection);
  computerPlay();
});


let options = ["rock", "paper", "scissors"];
let roundCountComp = 0;
let roundCountPlayer = 0;
let result = document.getElementById("result");

  function computerPlay (){
    let arrayPosition = Math.floor(Math.random()*2);
    let computerSelection = options[arrayPosition];
    alert("Computer plays " + computerSelection);
    playRound(playerSelection, computerSelection)
  }

  function playRound (playerSelection, computerSelection){

   switch(playerSelection){
     case "rock":
     if (computerSelection === "paper"){
       result.innerHTML = 'Paper covers rock!  One for the Comp!';
       roundCountComp++;
     } else if (computerSelection === "scissors"){
       result.innerHTML ='Rock breaks scissors!  One for the challenger!';
       roundCountPlayer++;
     } else {
       result.innerHTML ='Tied!';
     } break;
     case "paper":
     if (computerSelection === "scissors"){
       result.innerHTML = 'Scissors cuts paper! One for the Comp!';
       roundCountComp++;
     }else if (computerSelection === "rock"){
       result.innerHTML = 'Paper covers rock!  One for the challenger!';
       roundCountPlayer++;
     } else{
       result.innerHTML = 'A draw!';
     } break;
     case "scissors":
     if (computerSelection === "rock"){
       result.innerHTML = 'Rock breaks scissors!  One for the comp!';
       roundCountComp++;
     } else if (computerSelection === "paper"){
       result.innerHTML = 'Scissors cut paper!  One for the challenger!';
       roundCountPlayer++;
     } else{
       result.innerHTML = 'No winner today';
     }
   }

  }
}
