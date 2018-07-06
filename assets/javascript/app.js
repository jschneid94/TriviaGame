// Object array for each question and question values
var questions = [
    { question: "What's the name of the mark which brands those with the undead curse?",
      choices: ["Dark Brand", "Darksign", "Cursed Brand", "Mark of the Cursed"];
      answer: 1,
      photo: "../images/darksign.gif"
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
var questionBank = [];
var answeredQuestionBank = [];

// FUNCTIONS

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
        $("#gameSection").html("<p>Time's up! The answer is :" + triviaChoices.choices[triviaChoices.answer]);
        displayAnswer();
    }    
    
}

// Stops the timer
function stopTimer() {
   timerOn = false;
   clearInterval(intervalId);
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

// Displays the correct answer for a few seconds
function displayAnswer() {
    // Display the correct answer
        // setTimeout();
    // Push question index into another array so it won't be chosen again
    answeredQuestionBank.push(chosenQuestion);
    questions.splice(index, 1);

    setTimeout( function() {

        $("#options").empty();
        // Reset timer
        timer = 20;

        if (correct + incorrect + unAnswered === questions.length) {
            $("#triviaQuestion").empty();
            $("#triviaQuestion").html("Game over! Here is how you did:");
            $("#options").append("<p>Correct answers: " + correct + "</p>");
            $("#options").append("<p>Incorrect answers: " + incorrect + "</p>");
            $("#options").append("<p>Unanswered questions: " + unAnswered + "</p>");
            $("#reset").show();
        } else {
            askQuestion();
            runTimer();
        }

    }, 3000);

}

// On document ready...
$(document).ready(function() {

    // Only display start game button on to screen
    $("#reset").hide();

    // When user clicks start button, game starts
    $("#start").on("click", function() {
        $("#start").hide();
        for (var i = 0; i < options.length; i++) {
            questionBank.push(questions[i]);
        }
        askQuestion();
        startTimer();

    });

    // Event listener when player clicks on an answer
    $(".answerChoice").on("click", function() {

        userGuess = parseInt($(this).attr("data-guess"));

        if (userGuess === triviaChoices.answer) {
            stopTimer();
            correct++;
            userGuess = "";
            $("#gameSection").html("<h2>Correct!</h2>");
            displayAnswer();
        } else {
            stopTimer();
            incorrect++;
            userGuess = "";
            $("#gameSection").html("<h2>Incorrect! The answer was: " + answerChoices.choices[answerChoices.answer] + "</h2>");
            displayAnswer();
        }

    });

    // When user clicks reset button, reset the game
    $("#reset").on("click", function() {
        $("#start").hide();
        for (var i = 0; i < options.length; i++) {
            questions.push(questionBank[i]);
        }
        askQuestion();
        startTimer();
    });

});