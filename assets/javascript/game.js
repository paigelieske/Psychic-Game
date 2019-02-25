var str = "abcdefghijklmnopqrstuvwxyz";
var alphaArray = str.split(""); 

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesTried = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesTriedText = document.getElementById("guessesTried-text");

document.onkeyup = function() {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase(event.key);
    var computerGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)];
    guessesTried.push(userGuess);
    console.log(computerGuess);

    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessesTried = [];
        console.clear();
        alert("Your third eye is strong.");
    }
    else if (userGuess != computerGuess) {
        guessesLeft--;
        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            guessesTried = [];
            console.clear();
            alert("You must not be one with the force.");
        }
    }
    
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessesTriedText.textContent = "Your Guesses so far: " + guessesTried.join(" ");
};