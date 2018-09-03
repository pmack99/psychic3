var wins = 0;
var losses = 0;
var lives = 9;
var psychicGuess;
var psychicChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u','v','w', 'x', 'y', 'z'];
var guessChoices = [];

var sounds = [
    "assets/audio/doh.wav",
    "assets/audio/haha.wav",
    "assets/audio/no.mp3",
    "assets/audio/noDear.mp3",
    "assets/audio/agh.mp3"
  ];

// Generate random choice for the computer guess from the ChoicesArray.
var updateLetterToGuess = function() {
 psychicGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
    console.log(psychicGuess);

};

// Execute on page load.
updateLetterToGuess();

// Use onkeyup event to run the function we created earlier each time a key is pressed.
document.onkeyup = keyPress;

function resetGame(){
    userGuess = [];
    guessChoices = [];
    lives = 10;
    updateLetterToGuess();
}

function keyPress(event) {
    var userGuess = event.key;

if (psychicChoices.indexOf(userGuess) < 0){
        alert("You need to press a letter key between a - z");
        return false;
    }

if (guessChoices.indexOf(userGuess) > -1){
        alert("You guessed that already");
        return false;
    }

if (userGuess === psychicGuess) {
    wins++;
    guessChoices = [];
    userGuess = [];
    resetGame();
    //guessChoices = [];
    //lives = 10;
    //userGuess = [];
    var sound = document.getElementById("audio");
    sound.play();
    alert("You have chosen... wisely. You will have a great future, I have seen it already");
}
        
if (userGuess != psychicGuess) {
    lives--;
    guessChoices.push(userGuess);
}
      
if (lives === 0) {
    losses++;
    resetGame();
    //guessChoices = [];
    //lives = 9;
    var sound = document.getElementById("audio_two");
    sound.play();
    alert("You are not Nostradamus. You are a loser. Leave");
}

// Get reference to html elements for wins, losses, and lives and user-guess.
var winsScoreElement = document.getElementById('wins-score');
var lossesScoreElement = document.getElementById('losses-score');
var livesScoreElement = document.getElementById('lives-score');
var userGuessElement = document.getElementById('user-guess');
var guessElement= document.getElementById("guessed");

userGuessElement.textContent = userGuess;
guessElement.textContent = guessChoices;
winsScoreElement.textContent = wins;
lossesScoreElement.textContent = losses;
livesScoreElement.textContent = lives;


}
