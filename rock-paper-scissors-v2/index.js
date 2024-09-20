"use strict";



// Variables for the players
const userPlayer = document.getElementById("player1");
const pcPlayer = document.getElementById("player2");

// Variables for the rock, paper and scissors buttons
const buttons = document.querySelectorAll("button");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// PC choices
const options = ["rock", "paper", "scissors"]
const pcChoice = getPcChoice();
let playerChoice = null;

const winningOptions = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
};

window.addEventListener("DOMContentLoaded", startGame);

function getPcChoice() {
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
}

function startGame() {
    console.log("startGame:", pcChoice);

    // Adding eventlisteners to alle the three buttons
    rock.addEventListener("mousedown", () => handlePlayerChoice(options[0]));
    paper.addEventListener("mousedown", () => handlePlayerChoice(options[1]));
    scissors.addEventListener("mousedown", () => handlePlayerChoice(options[2]));
}

function handlePlayerChoice(clickedOption) {
    playerChoice = clickedOption;

    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");

    document.querySelector("#player1").addEventListener("animationend", () => {
        if (playerChoice === options[0]) {
            document.querySelector("#player1").classList.remove("shake");
            console.log("User chose rock");
            userPlayer.classList.add("rock");
        } else if (playerChoice === options[1]) {
            document.querySelector("#player1").classList.remove("shake");
            console.log("User chose paper");
            userPlayer.classList.add("paper");
        } else {
            document.querySelector("#player1").classList.remove("shake");
            console.log("User chose scissors");
            userPlayer.classList.add("scissors");
        }
    });
    document.querySelector("#player2").addEventListener("animationend", showPcChoice);

    document.querySelector("#buttons").classList.add("disabled");

    // Removes eventlistener and disables buttons 
    // rock.removeEventListener("mousedown", shakeAnimationStart);
    // paper.removeEventListener("mousedown", shakeAnimationStart);
    // scissors.removeEventListener("mousedown", shakeAnimationStart);
}

function showPcChoice() {
    console.log("Show pc choice", pcChoice)

    if (pcChoice === options[0]) {
        document.querySelector("#player2").classList.remove("shake");
        console.log("pc chose rock")
        pcPlayer.classList.add("rock");
    } else if (pcChoice === options[1]) {
        document.querySelector("#player2").classList.remove("shake");
        console.log("pc chose paper")
        pcPlayer.classList.add("paper");
    } else {
        document.querySelector("#player2").classList.remove("shake");
        console.log("pc chose scissors")
        pcPlayer.classList.add("scissors");
    }

    return showResult();
}

function showResult() {
    console.log("showResult");
    if (pcChoice === playerChoice) {
        document.getElementById("draw").classList.remove("hidden");
    } else if (winningOptions[playerChoice] === pcChoice) {
        document.getElementById("win").classList.remove("hidden");
    } else {
        document.getElementById("lose").classList.remove("hidden");
    }
}
