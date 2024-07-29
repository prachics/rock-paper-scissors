function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let humanChoice = window.prompt("What's your choice?");
  return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
