var str = "abcdefghijklmnopqrstuvwxyz";
var alphaArray = str.split(""); 

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesTried = [];
var computerGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesTriedText = document.getElementById("guessesTried-text");

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = alphaArray.includes(userGuess);
        
        if (check === false) {
            alert("That's not a letter....tsk tsk.");
        }
        else if (check === true) {
            guessesTried.push(userGuess);
            console.log(computerGuess);    

            if (userGuess === computerGuess) {
                wins++;
                guessesLeft = 9;
                guessesTried = [];
                console.clear();
                alert("Your third eye is strong.");
                computerGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)];
            }
            else if (userGuess != computerGuess) {
                guessesLeft--;
                if (guessesLeft === 0) {
                    losses++;
                    guessesLeft = 9;
                    guessesTried = [];
                    console.clear();
                    alert("You must not be one with the force.");
                    computerGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)];
                }
            }
        }
    
    // need to add code restricting duplicate userGuess
      
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessesTriedText.textContent = "Your Guesses so far: " + guessesTried.join(" ");
};