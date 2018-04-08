document.addEventListener('DOMContentLoaded', start);

function start() {

  var rockButton = document.getElementsByClassName("rock")[0];
  var paperButton = document.getElementsByClassName("paper")[0];
  var scissorsButton = document.getElementsByClassName("scissors")[0];
  let computerSelection = "rock";
  let playerSelection = "rock";
  let roundCountComp = 0;
  let roundCountPlayer = 0;
  let result = document.getElementById("result");
  let playerScore = document.getElementById("playerCount");
  let compScore = document.getElementById("compCount");

  rockButton.addEventListener("click", function() {
  playerSelection = "rock";
  alert("Player Chooses " + playerSelection);
  computerPlay();
});
  paperButton.addEventListener("click", function() {
  playerSelection = "paper";
  alert("Player Chooses " + playerSelection);
  computerPlay();
});
  scissorsButton.addEventListener("click", function() {
  playerSelection = "scissors";
  alert("Player Chooses " + playerSelection);
  computerPlay();
});


let options = ["rock", "paper", "scissors"];

  function computerPlay (){
    let arrayPosition = Math.floor(Math.random()*2);
    let computerSelection = options[arrayPosition];
    alert("Computer plays " + computerSelection);
    playRound(playerSelection, computerSelection)
  }

  function playRound (playerSelection, computerSelection){
     if (computerSelection === "paper" && playerSelection === "rock"){
       result.innerHTML = 'Paper covers rock!  One for the Comp!';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "scissors" && playerSelection === "rock"){
       result.innerHTML ='Rock breaks scissors!  One for the challenger!';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "rock" && playerSelection === "rock"){
       result.innerHTML ='Tied!';
     } else if (computerSelection === "scissors" && playerSelection === "paper"){
       result.innerHTML = 'Scissors cuts paper! One for the Comp!';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     }else if (computerSelection === "rock" && playerSelection === "paper"){
       result.innerHTML = 'Paper covers rock!  One for the challenger!';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "paper" && playerSelection === "paper"){
       result.innerHTML = 'A draw!';
     } else if (computerSelection === "rock" && playerSelection === "scissors"){
       result.innerHTML = 'Rock breaks scissors!  One for the comp!';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "paper" && playerSelection === "scissors"){
       result.innerHTML = 'Scissors cut paper!  One for the challenger!';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else{
       result.innerHTML = 'No winner today';
     }
   }
 }
