// Object array for each question and question values
var questions = [
    { question: "What's the name of the mark which brands those with the undead curse?",
      choices: ["Dark Brand", "Darksign", "Cursed Brand", "Mark of the Cursed"],
      answer: 1,
      photo: "assets/images/darksign.gif"
    }, 
    { question: "Who famously betrayed his own kind?",
      choices: ["Gravelord Nito", "Gwyn, The Lord of Sunlight", "Andre of Astora", "Seath the Scaleless"],
      answer: 3,
      photo: "assets/images/seath.gif"
    },
    { question: "What's the name of Gwyn's daughter?",
      choices: ["Gwynevere", "The Witch of Izalith", "Gwyndolin", "Anastacia"],
      answer: 0,
      photo: "assets/images/gwynevere.gif"
    },
    { question: "What is the name of the land in which the game takes place?",
      choices: ["Londor", "Drangleic", "Lordran", "Anastacia"],
      answer: 2,
      photo: "assets/images/lordran.jpeg"
    },
    { question: "Who is the creator of the place known as the 'Painted World'?",
      choices: ["Gwyn, The Lord of Sunlight", "Solaire", "Ariamis", "Quelaag"],
      answer: 2,
      photo: "assets/images/ariamis.gif"
    },
    { question: "Who are the knights that stayed in the Palace at Anor Londo?",
      choices: ["Silver Knights", "Knights of Light", "Black Knights", "The Loyalists"],
      answer: 0,
      photo: "assets/images/silver_knight.gif"
    },
    { question: "Who found the 4th Lord Soul, known as the 'Dark Soul'?",
      choices: ["Gravelord Nito", "The Witch of Izalith", "Gwyn, The Lord of Sunlight", "Furtive Pygmy"],
      answer: 3,
      photo: "assets/images/furtive_pygmy.gif"
    },
    { question: "Who is popularly believed to be a son of Gwyn?",
      choices: ["Gwyndolin", "Solaire", "Artorias", "Ornstein"],
      answer: 1,
      photo: "assets/images/solaire.gif"
    },
];

// GLOBAL VARIABLES
// Count for correct, incorrect, and unanswered questions
var correct = 0;
var incorrect = 0
var unAnswered = 0;
// Timer count
var timer = 3;
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
var questionCount = questions.length

// FUNCTIONS

// Starts the interval on the timer
function startTimer() {
    $("#timeRemaining").show();
    $("#gameSection").show();
    if (!timerOn) {
        intervalId = setInterval(decrementTimer, 1000);
        timerOn = true;
    }
}

// Decrements the timer on the DOM
function decrementTimer() {
    // Display the count on the screen
    $("#timeRemaining").html("<h3>Time Remaining: " + timer + "</h3>");
    // Decrement the timer by 1.
    timer--;

    // If timer reaches zero...
    if (timer === -1) {
        unAnswered++;
        stopTimer();
        $("#triviaQuestion").html("<p>Time's up! The answer is: " + chosenQuestion.choices[chosenQuestion.answer]);
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
    for (var i = 0; i < chosenQuestion.choices.length; i++) {
        var triviaChoices = $("<div>");
        triviaChoices.addClass("answerChoice");
        triviaChoices.html(chosenQuestion.choices[i]);
        triviaChoices.attr("data-guess", i);
        $("#options").append(triviaChoices);
    }
}

// Displays the correct answer for a few seconds
function displayAnswer() {
    $("#options").empty();
    $("#timeRemaining").hide();
    $("#options").append("<img src=" + chosenQuestion.photo + ">");
    // Push question index into another array so it won't be chosen again
    answeredQuestionBank.push(chosenQuestion);
    questions.splice(index, 1);

    setTimeout( function() {

        $("#options").empty();
        // Reset timer
        timer = 3;

        if (correct + incorrect + unAnswered === questionCount) {
            $("#triviaQuestion").empty();
            $("#triviaQuestion").html("Game over! Here is how you did:");
            $("#options").append("<p>Correct answers: " + correct + "</p>");
            $("#options").append("<p>Incorrect answers: " + incorrect + "</p>");
            $("#options").append("<p>Unanswered questions: " + unAnswered + "</p>");
            $("#reset").show();
        } else {
            startTimer();
            askQuestion();
        }

    }, 3000);

}

// On document ready...
$(document).ready(function() {

    // Only display start game button on to screen
    $("#reset").hide();
    $("#timeRemaining").hide();

    // When user clicks start button, game starts
    $("#start").on("click", function() {
        $("#start").hide();
        for (var i = 0; i < questions.length; i++) {
            questionBank.push(questions[i]);
        }
        startTimer();
        askQuestion();
    });

    // Event listener when player clicks on an answer
    $("#options").on("click", ".answerChoice", function() {

        userGuess = parseInt($(this).attr("data-guess"));

        if (userGuess === chosenQuestion.answer) {
            stopTimer();
            correct++;
            userGuess = "";
            $("#triviaQuestion").html("<h2>Correct!</h2>");
            displayAnswer();
        } else {
            stopTimer();
            incorrect++;
            userGuess = "";
            $("#triviaQuestion").html("<h2>Incorrect! The answer was: " + chosenQuestion.choices[chosenQuestion.answer] + "</h2>");
            displayAnswer();
        }

    });

    // When user clicks reset button, reset the game
    $("#reset").on("click", function() {
        correct = 0;
        incorrect = 0;
        unAnswered = 0;
        $("#options, #triviaQuestion").empty();
        $("#reset").hide();
        for (var i = 0; i < questionBank.length; i++) {
            questions.push(questionBank[i]);
        }
        $("#start").show();
    });

});