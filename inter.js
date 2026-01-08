let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("you-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randogNumber = Math.floor(Math.random() *3);
    return choices[randogNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "The Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "you".fontsize(3).sup();
    const smallComp = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} beats ${convertToWord(computerChoice)}${smallComp}. You win!`;
    document.getElementById(userChoice).classList.add('green-hulk');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-hulk')}, 500 )
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "you".fontsize(3).sup();
    const smallComp = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} loses to ${convertToWord(computerChoice)}${smallComp}. You lost....8080`;
    document.getElementById(userChoice).classList.add('red-hulk');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-hulk')}, 500)
}

function draw(userChoice, computerChoice) {
    const smallUser = "you".fontsize(3).sup();
    const smallComp = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} equals to ${convertToWord(computerChoice)}${smallComp}. It's a draw`;
    document.getElementById(userChoice).classList.add('gray-draw');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-draw')}, 500)
}




function game (userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
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