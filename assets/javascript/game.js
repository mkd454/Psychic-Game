// Rules //

// CPU picks a letter
// Player guesses a letter
// Player has 10 tries, if failure, track letters until no more guesses -> reset
// Track score

// CPU picks a letter from the alphabet array. Value gets stored in randomLetter variable
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var randomLetter = getRandomLetter;

// Score beginning values set
var win = 0;
var lose = 0;
var guessesLeft = 9;
var guessesDisplayed = "";
var guess = [];


// RESET VALUES
function reset() {
  getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  randomLetter = getRandomLetter;
  guessesLeft = 10;
  guess = [];
  guessesDisplayed = "";
  document.getElementById("guessesDisplayed").innerHTML = guessesDisplayed;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  console.log(randomLetter);
}

reset();
// Run whenever the user presses a key
document.onkeyup = function(event) {
  guess = event.key;

  // Make sure the user input is valid
  if (alphabet.indexOf(guess) >= 0 && guessesDisplayed.indexOf(guess) < 0) {
    console.log("valid entry");
    
    // Win situation
    if (guess === randomLetter) {
      win++;
      document.getElementById("win").innerHTML = win;
      reset();
    } // When guess is wrong, but still have guesses left
    else if (guess !== randomLetter && guessesLeft > 0) {
      guessesLeft--;
      document.getElementById("guessesLeft").innerHTML = guessesLeft;
      
      if (guessesDisplayed === "") {
        guessesDisplayed = guess;
        document.getElementById("guessesDisplayed").innerHTML = guessesDisplayed;
      } else {
        guessesDisplayed = guessesDisplayed + ", " + guess;
        document.getElementById("guessesDisplayed").innerHTML = guessesDisplayed;
      }
      
      // If none of the above happen, it is safe to assume the user loses and the game resets
      if (guessesLeft === 0) {
        lose++;
        document.getElementById("lose").innerHTML = lose;
        reset();
      }
    } 
  } 
}





