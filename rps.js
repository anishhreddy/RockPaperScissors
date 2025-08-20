let choices = ["rock", "paper", "scissors"];
let playerchoice = document.getElementById("playerchoice");
let computerchoice = document.getElementById("computerchoice");
let displayMessage = document.getElementById("displayMessage");
let result = "";
let playerscore = document.getElementById("playerscore");
let computerscore = document.getElementById("computerscore");
let pscore = 0;
let cscore = 0;

function GameRPS(choice) {
  let compchoice = choices[Math.floor(Math.random() * 3)];

  if (choice === compchoice) {
    result = `IT'S A TIEE!`;
  } else {
    switch (choice) {
      case "rock":
        result = compchoice === "scissors" ? "YOU WIN!!" : "YOU LOOSE!";
        break;
      case "paper":
        result = compchoice === "rock" ? "YOU WIN!!" : "YOU LOOSE!";
        break;
      case "scissors":
        result = compchoice === "paper" ? "YOU WIN!!" : "YOU LOOSE!";
        break;
    }
  }

  playerchoice.textContent = `Player Choice : ${choice}`;
  computerchoice.textContent = `Computer Choice : ${compchoice}`;
  displayMessage.textContent = result;

  switch (displayMessage.textContent) {
    case "YOU WIN!!":
      pscore++;
      playerscore.textContent = `Player Score : ${pscore}`;
      break;
    case "YOU LOOSE!":
      cscore++;
      computerscore.textContent = `Computer Score : ${cscore}`;
      break;
  }
}
