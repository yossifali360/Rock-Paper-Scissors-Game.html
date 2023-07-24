let userWins = 0;
let computerWins = 0;
let ties = 0;

function resetGame() {
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");
  rock.style.backgroundColor = "transparent";
  paper.style.backgroundColor = "transparent";
  scissors.style.backgroundColor = "transparent";
}

function playGame(playerMove) {
  const moves = ["rock", "paper", "scissors"];
  const computerMove = moves[Math.floor(Math.random() * moves.length)];
  const txt = document.getElementById("result");
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");
  let result;
  let lastColor;
  
  if (playerMove === computerMove) {
    ties++;
    result = "Tie!";
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    userWins++;
    result = "You win!";
  } else {
    computerWins++;
    result = "Computer wins!";
  }
  
  const userWinsElement = document.getElementById("user");
  const computerWinsElement = document.getElementById("comp");
  const tiesElement = document.getElementById("tie");
  
  userWinsElement.textContent = `User Wins: ${userWins}`;
  computerWinsElement.textContent = `Computer Wins: ${computerWins}`;
  tiesElement.textContent = `Ties: ${ties}`;
  
  if (result == "Tie!") {
    txt.style.backgroundColor= "black";
  } else if (result == "You win!") {
    txt.style.backgroundColor= "green";
  } else {
    txt.style.backgroundColor= "red";
  }
  
  switch (playerMove) {
    case "rock":
      if (lastColor === "red") {
        resetGame();
        lastColor = null;
      } else {
        resetGame();
        rock.style.backgroundColor = "red";
        lastColor = "red";
      }
      break;
    case "paper":
      if (lastColor === "red") {
        resetGame();
        lastColor = null;
      } else {
        resetGame();
        paper.style.backgroundColor = "red";
        lastColor = "red";
      }
      break;
    case "scissors":
      if (lastColor === "red") {
        resetGame();
        lastColor = null;
      } else {
        resetGame();
        scissors.style.backgroundColor = "red";
        lastColor = "red";
      }
      break;
  }
  if (result==="You win!"){
  txt.textContent = `Congratulations .. You chose ${playerMove}. Computer chose ${computerMove}.`;
}
  else if (result==="Computer wins!"){
  txt.textContent = `Hard Luck .. You chose ${playerMove}. Computer chose ${computerMove}.`;
}
  else{
  txt.textContent = `Tie .. You chose ${playerMove}. Computer chose ${computerMove}.`;
}
}