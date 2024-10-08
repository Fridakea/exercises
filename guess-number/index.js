// Choose a random number between 0 and 100, using round that rounds both up and down
let randomNumber = Math.round(Math.random()*100);

window.addEventListener("DOMContentLoaded", guessNumber)

function guessNumber() {
    document.querySelector("#submit-button").addEventListener("mousedown", checkNumber);
    document.querySelector("#emoji").classList.add("hide");

    console.log(randomNumber);
}

function checkNumber() {
// Checks if the number guessed by the user is too high, too low or the right number
    if (document.querySelector("#number").value > randomNumber) {
        document.querySelector(".guess-message").textContent = "Du gættede desværre for højt. Skriv et nyt tal for at prøve igen";
    } else if (document.querySelector("#number").value < randomNumber) {
        document.querySelector(".guess-message").textContent = "Du gættede desværre for lavt. Skriv et nyt tal for at prøve igen";
    } else if (document.querySelector("#number").value = randomNumber) {
        rightGuess();
    }
}

function rightGuess() {
    document.querySelector(".guess-message").innerHTML = "Tillykke du gættede rigtigt! Vil du prøve igen?"
    document.querySelector("#emoji").classList.remove("hide");
    document.querySelector("#emoji").classList.add("spin");
    
    // New number makes it possible to try again
    randomNumber = Math.round(Math.random()*100);
}