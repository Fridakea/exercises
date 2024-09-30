let guess = 50;
let high = 100;
let low = 0;

window.addEventListener("DOMContentLoaded", startGame);

function startGame() {
    console.log("Spil startet");

    // Fjerner disable fra start knappen
    document.getElementById("start").disabled = false;

    document.getElementById("start").addEventListener("mousedown", showPcGuess);

    // Disables too-low, too-high og correct-guess knapperne
    document.getElementById("too-low").disabled = true;
    document.getElementById("too-high").disabled = true;
    document.getElementById("correct-guess").disabled = true;
}

function showPcGuess() {
    // Disables start knappen
    document.getElementById("start").disabled = true;

    // Fjerner disable fra too-low, too-high og correct-guess knapperne
    document.getElementById("too-low").disabled = false;
    document.getElementById("too-high").disabled = false;
    document.getElementById("correct-guess").disabled = false;

    document.getElementById("computer-guess").textContent = guess;
    document.getElementById("too-low").addEventListener("mousedown", guessedTooLow);
    document.getElementById("too-high").addEventListener("mousedown", guessedTooHigh);
    document.getElementById("correct-guess").addEventListener("mousedown", () => {
        document.getElementById("computer-guess").textContent = "Jeg gættede rigtigt!";
        guess = 50;
        high = 100;
        low = 0;    
        startGame();
    });
}

function guessedTooLow() {
    low = guess;
    const interval = high-low;
    guess = Math.round(guess+(interval/2));

    return (
        showPcGuess()
    );
}

function guessedTooHigh() {
    high = guess;
    const interval = high-low;
    guess = Math.round(guess-(interval/2));

    return (
        showPcGuess()
    );
}