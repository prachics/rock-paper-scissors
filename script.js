let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultsDiv = document.getElementById("results");
  const finalResultDiv = document.getElementById("finalResult");
  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    resultMessage = `You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }.`;
  } else {
    computerScore++;
    resultMessage = `You lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`;
  }

  resultsDiv.innerHTML = `
        <p>${resultMessage}</p>
        <p>Current Scores - Human: ${humanScore}, Computer: ${computerScore}</p>
    `;

  if (humanScore === 5 || computerScore === 5) {
    finalResultDiv.innerHTML = `
            <h2>${
              humanScore === 5
                ? "You are the overall winner!"
                : "The computer is the overall winner!"
            }</h2>
        `;
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("scissors"));
