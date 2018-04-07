document.addEventListener('DOMContentLoaded', start)

function start() {

  document.getElementsByClassName("rock")[0].addEventListener("click", computerPlay);
  document.getElementsByClassName("paper")[0].addEventListener("click", computerPlay);
  document.getElementsByClassName("scissors")[0].addEventListener("click", computerPlay);
  }

let options = ["rock", "paper", "scissors"];

  function computerPlay (){
    let arrayPosition = Math.floor(Math.random()*2);
    let computerSelection = options[arrayPosition];
    alert("Computer plays " + computerSelection);
  }
