// Object array for each question and question values
var questions = [
    { question: "",
      choices: ["", "", "", ""];
      answer: ,
    }, 
    { question: "",
      choices: ["", "", "", ""];
      answer: ,

    }
];

// GLOBAL VARIABLES
// Count for correct, incorrect, and unanswered questions
var correct = 0;
var incorrect = 0
var unAnswered = 0;
// Timer count
var timer = 20;
// Variable for setting interval
var intervalId;
// Boolean for if timer is on
var timerOn = false;
// Variable to store user guess
var userGuess;
var chosenQuestion; 
var index;

// FUNCTIONS

// Displays the timer and the question area, hides other sections
function startGame() {
    // Show timer
    // Show question area
    // Hide start button
    // run askQuestion
    askQuestion();
    // run startTimer
    startTimer();
}

// Starts the interval on the timer
function startTimer() {
    if (!timerOn) {
        intervalId = setInterval(decrementTimer, 1000);
        timerOn = true;
    }
}

// Decrements the timer
function decrementTimer() {
    // Display the count on the screen
    $("#timer").text("<h3>Time Remaining: " + timer + "</h3>");
    // Decrement the timer by 1.
    timer--;

    // If timer reaches zero...
    if (timer === 0) {
        unAnswered++;
        stopTimer();
    }    
    
}

// Stops the timer
function stopTimer() {
   running = false;
   clearInterval(intervalId);
   $("#gameSection").html("<p>Time's up! The answer is :" + )
}

// Displays a new question onto the DOM
function askQuestion() {
    // Generate a random question from questions object
    index = Math.floor(Math.random() * questions.length);
    chosenQuestion = questions[index];

    // Display that object information to the DOM
    $("#triviaQuestion").html("<h2>" + chosenQuestion.question + "</h2>");
    for (var i = 0; i < chosenQuestion.choices; i++) {
        var triviaChoices = $("<div/>");
        triviaChoices.addClass("answerChoice");
        triviaChoices.append(chosenQuestion.choices[i]);
        triviaChoices.attr("data-guess", i);
        $("#options").append(triviaChoices);
    }
}

// Checks if the user's guess is correct
function checkGuess() {

}

// Displays the correct answer for a few seconds
function displayAnswer() {
    // Display the correct answer
        // setTimeout();
    // Push question index into another array so it won't be chosen again
    askQuestion();
}

// On document ready...
$(document).ready(function() {

    // Only display start game button on to screen
    $("#reset").hide();

    // When user clicks start button, game starts

    // When user clicks reset button, reset the game

});