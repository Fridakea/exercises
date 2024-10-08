let pcChoice = Math.ceil(Math.random()*3);

window.addEventListener("DOMContentLoaded", startGame);

// Add eventlistener to the different buttons, to display the choice
function startGame() {
    console.log("pcChoice:", pcChoice);

    document.querySelector(".rock").addEventListener("mousedown", rockChoice);
    document.querySelector(".paper").addEventListener("mousedown", paperChoice);
    document.querySelector(".scissors").addEventListener("mousedown", scissorsChoice);
}

// User choose rock
function rockChoice() {
    // Disable buttons when one is clicked
    document.querySelector("#buttons").classList.add("disabled");

    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");
    document.querySelector("#player1").addEventListener("animationend", showRock);
    document.querySelector("#player2").addEventListener("animationend", showPcShoice);
}

function showRock() {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("rock");
}

// User choose paper
function paperChoice() {
    // Disable buttons when one is clicked
    document.querySelector("#buttons").classList.add("disabled");

    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");
    document.querySelector("#player1").addEventListener("animationend", showPaper);
    document.querySelector("#player2").addEventListener("animationend", showPcShoice);
}

function showPaper () {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("paper");
}

// User choose scissors
function scissorsChoice() {
    // Disable buttons when one is clicked
    document.querySelector("#buttons").classList.add("disabled");

    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");
    document.querySelector("#player1").addEventListener("animationend", showScissors);
    document.querySelector("#player2").addEventListener("animationend", showPcShoice);
}

function showScissors () {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("scissors");
}

// Show PC's choise
function showPcShoice() {
    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.remove("shake");

    if (pcChoice === 1) {
        document.querySelector("#player2").classList.add("rock");
    } else if (pcChoice === 2) {
        document.querySelector("#player2").classList.add("paper");
    } else {
        document.querySelector("#player2").classList.add("scissors");
    }

    // Check if user wins, loose or it's a draw
    if (player1.classList.contains("rock") && player2.classList.contains("paper")) {
        document.querySelector("#lose").classList.remove("hidden");
    } else if (player1.classList.contains("rock") && player2.classList.contains("scissors")) {
        document.querySelector("#win").classList.remove("hidden");
    } else if (player1.classList.contains("paper") && player2.classList.contains("scissors")) {
        document.querySelector("#lose").classList.remove("hidden");
    } else if (player1.classList.contains("paper") && player2.classList.contains("rock")) {
        document.querySelector("#win").classList.remove("hidden");
    } else if (player1.classList.contains("scissors") && player2.classList.contains("rock")) {
        document.querySelector("#lose").classList.remove("hidden");
    } else if (player1.classList.contains("scissors") && player2.classList.contains("paper")) {
        document.querySelector("#win").classList.remove("hidden");
    } else {
        document.querySelector("#draw").classList.remove("hidden");        
    }

    document.querySelector("#play-again").classList.remove("hidden");  
    document.querySelector("#play-again").classList.add("fade-in");
    document.querySelector("#play-again").addEventListener("animationend", playAgain);
}

function playAgain() {
    document.querySelector("#play-again").classList.remove("fade-in");
    document.querySelector("#play-again").classList.add("stay-in");

    // Reloading the link when choosing to play again: https://developer.mozilla.org/en-US/docs/Web/API/Location/reload 
    document.querySelector("#play-again").addEventListener("mousedown", () => location.reload());
}