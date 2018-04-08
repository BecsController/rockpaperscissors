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
  lizardButton.addEventListener("click", function() {
  playerSelection = "lizard";
  alert("Player Chooses " + playerSelection);
  computerPlay();
});
  spockButton.addEventListener("click", function() {
  playerSelection = "spock";
  alert("Player Chooses " + playerSelection);
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
    alert("Computer plays " + computerSelection);
    playRound(playerSelection, computerSelection)
  }

  function playRound (playerSelection, computerSelection){
     if (computerSelection === "paper" && playerSelection === "rock"){
       result.innerHTML = 'Paper covers rock!  One for the Comp!';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "scissors" && playerSelection === "rock"){
       result.innerHTML ='(and as it always has) Rock crushes Scissors.';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "rock" && playerSelection === "rock"){
       result.innerHTML ='Tied!';
     } else if (computerSelection === "lizard" && playerSelection === "rock"){
       result.innerHTML ='Rock crushes lizard!';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "spock" && playerSelection === "rock"){
       result.innerHTML ='Spock vaporizes Rock';
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
       result.innerHTML = 'A draw!';
     } else if (computerSelection === "lizard" && playerSelection === "paper"){
       result.innerHTML = 'Lizard eats Paper';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "spock" && playerSelection === "paper"){
       result.innerHTML = 'Paper disproves Spock';
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
       result.innerHTML = 'Scissors decapitates Lizard';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "spock" && playerSelection === "scissors"){
       result.innerHTML = 'Spock smashes Scissors';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "scissors" && playerSelection === "scissors"){
       result.innerHTML = 'No winner today';
     } else if (computerSelection === "rock" && playerSelection === "spock"){
       result.innerHTML = 'Spock vaporizes Rock';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "paper" && playerSelection === "spock"){
       result.innerHTML = 'Paper disproves Spock';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "scissors" && playerSelection === "spock"){
       result.innerHTML = 'Spock smashes scissors';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "lizard" && playerSelection === "spock"){
       result.innerHTML = 'Lizard poisons Spock';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "spock" && playerSelection === "spock"){
       result.innerHTML = 'Live long and prosper';
     } else if (computerSelection === "rock" && playerSelection === "lizard"){
       result.innerHTML = 'Rock crushes Lizard';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "paper" && playerSelection === "lizard"){
       result.innerHTML = 'Lizard eats paper';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "scissors" && playerSelection === "lizard"){
       result.innerHTML = 'Scissors decapitates Lizard';
       roundCountComp++;
       compScore.innerHTML = 'Computer Count: ' + roundCountComp;
     } else if (computerSelection === "spock" && playerSelection === "lizard"){
       result.innerHTML = 'Lizard poisons Spock';
       roundCountPlayer++;
       playerScore.innerHTML = 'Player Count: ' + roundCountPlayer;
     } else if (computerSelection === "lizard" && playerSelection === "lizard"){
       result.innerHTML = 'Two Lizards in a pod';
   }
 }
}
