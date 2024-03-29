let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter){
  if (letter==="r") return "Rock";
  if (letter==="p") return "Paper";
  return "Scissor";
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + "(You) beats " + convertToWord(computerChoice) + "(Computer). You Win!"
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow');}, 300);
}

function lose (userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) +"(You) is beaten by " + convertToWord(computerChoice) + "(Computer). Computer Wins!";
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow');}, 300);
}

function draw (userChoice, computerChoice){
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) +"(You) is same as " + convertToWord(computerChoice) + "(Computer). It is a Draw!";
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow');}, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "ss":
    case "rr":
    case "pp":
      draw(userChoice, computerChoice);
      break;  
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p");
  })
  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();