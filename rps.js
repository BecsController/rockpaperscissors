document.addEventListener('DOMContentLoaded', start);

function start() {

  var rockButton = document.getElementsByClassName("rock")[0];
  var paperButton = document.getElementsByClassName("paper")[0];
  var scissorsButton = document.getElementsByClassName("scissors")[0];
  var lizardButton = document.getElementsByClassName("lizard")[0];
  var spockButton = document.getElementsByClassName("spock")[0];
  var resetButton = document.getElementById("reset");
  let computerSelection = "rock";
  let playerSelection = "rock";
  let roundCountComp = 0;
  let roundCountPlayer = 0;
  let result = document.getElementById("result");
  let playerScore = document.getElementById("playerCount");
  let compScore = document.getElementById("compCount");

  rockButton.addEventListener("click", function() {
  playerSelection = "rock";
  computerPlay();
});
  paperButton.addEventListener("click", function() {
  playerSelection = "paper";
  computerPlay();
});
  scissorsButton.addEventListener("click", function() {
  playerSelection = "scissors";
  computerPlay();
});
  lizardButton.addEventListener("click", function() {
  playerSelection = "lizard";
  computerPlay();
});
  spockButton.addEventListener("click", function() {
  playerSelection = "spock";
  computerPlay();
});
  resetButton.addEventListener("click", function(){
    roundCountComp = 0;
    roundCountPlayer = 0;
    playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
    compScore.innerHTML = 'Computer Count: ' + roundCountComp;
  })

let options = ["rock", "paper", "scissors", "lizard", "spock"];

  function computerPlay (){
    let arrayPosition = Math.floor(Math.random()*5);
    let computerSelection = options[arrayPosition];
    playRound(playerSelection, computerSelection)
  }

  function playRound (playerSelection, computerSelection){
     if (computerSelection === "paper" && playerSelection === "rock"){
       result.innerHTML = 'Paper covers rock!  One for the Comp!';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "scissors" && playerSelection === "rock"){
       result.innerHTML ='(and as it always has) Rock crushes Scissors. One for the Comp';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "rock" && playerSelection === "rock"){
       result.innerHTML ='I like rocks too! Tied!';
     } else if (computerSelection === "lizard" && playerSelection === "rock"){
       result.innerHTML ='Rock crushes lizard! One for the challenger';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "spock" && playerSelection === "rock"){
       result.innerHTML ='Spock vaporizes Rock.  One for the Comp';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "scissors" && playerSelection === "paper"){
       result.innerHTML = 'Scissors cuts paper! One for the Comp!';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     }else if (computerSelection === "rock" && playerSelection === "paper"){
       result.innerHTML = 'Paper covers rock!  One for the challenger!';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "paper" && playerSelection === "paper"){
       result.innerHTML = 'A draw! Get it?  You both chose paper hehe';
     } else if (computerSelection === "lizard" && playerSelection === "paper"){
       result.innerHTML = 'Lizard eats Paper. One for the Comp';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "spock" && playerSelection === "paper"){
       result.innerHTML = 'Paper disproves Spock. One for the challenger';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "rock" && playerSelection === "scissors"){
       result.innerHTML = 'Rock breaks scissors!  One for the comp!';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "paper" && playerSelection === "scissors"){
       result.innerHTML = 'Scissors cut paper!  One for the challenger!';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "lizard" && playerSelection === "scissors"){
       result.innerHTML = 'Scissors decapitates Lizard.  One for the newbie!';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "spock" && playerSelection === "scissors"){
       result.innerHTML = 'Spock smashes Scissors. One for the Comp';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "scissors" && playerSelection === "scissors"){
       result.innerHTML = 'Two lots of scissors, no winner today';
     } else if (computerSelection === "rock" && playerSelection === "spock"){
       result.innerHTML = 'Spock vaporizes Rock. One for the challenger';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "paper" && playerSelection === "spock"){
       result.innerHTML = 'Paper disproves Spock. One for the Comp';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "scissors" && playerSelection === "spock"){
       result.innerHTML = 'Spock smashes scissors. One for the challenger';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "lizard" && playerSelection === "spock"){
       result.innerHTML = 'Lizard poisons Spock. One for the Comp';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "spock" && playerSelection === "spock"){
       result.innerHTML = 'Spock meets Spock, Live long and prosper';
     } else if (computerSelection === "rock" && playerSelection === "lizard"){
       result.innerHTML = 'Rock crushes Lizard. One for the Comp';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "paper" && playerSelection === "lizard"){
       result.innerHTML = 'Lizard eats paper. One for the challenger';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "scissors" && playerSelection === "lizard"){
       result.innerHTML = 'Scissors decapitates Lizard. One for the Comp';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "spock" && playerSelection === "lizard"){
       result.innerHTML = 'Lizard poisons Spock. One for the challenger';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "lizard" && playerSelection === "lizard"){
       result.innerHTML = 'Two Lizards in a pod.  Tie.';
   }
 }
}
