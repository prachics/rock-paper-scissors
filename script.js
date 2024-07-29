let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let humanChoice;
  const validChoices = ["rock", "paper", "scissors"];

  do {
    humanChoice = window
      .prompt("What's your choice? (rock, paper, scissors)")
      .toLowerCase();
  } while (!validChoices.includes(humanChoice));

  return humanChoice;
}

function playGame() {
  function playRound(humanChoice, computerChoice, i) {
    if (humanChoice === computerChoice) {
      console.log(`Round ${i} - It's a tie!`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log(
        `Round ${i} - You win! ${
          humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        } beats ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }.`
      );
    } else {
      computerScore++;
      console.log(
        `Round ${i} - You lose! ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`
      );
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice, i);
  }

  console.log(
    `Final Scores - Human: ${humanScore}, Computer: ${computerScore}`
  );
  if (humanScore > computerScore) {
    console.log("Congratulations!!  You are the winner!");
  } else if (humanScore < computerScore) {
    console.log("The computer is the winner!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();
