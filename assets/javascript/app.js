// On document ready...
$(document).ready(function() {

    // Hide the timer
    $("#timeRemaining").hide();
    // Start game when button is clicked
    $("#start").on("click", trivia.startGame);
    // Check the answer when an option is clicked on the screen
    $(document).on("click", ".option", trivia.checkGuess);

    var trivia = {
        // Trivia properties
        correctAnswers = 0,
        incorrectAnswers = 0,
        noAnswers = 0,
        currentSet = 0,
        timer = 20,
        timerOn = false,
        timerId = '',
         // questions options and answers data
        questions = {
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "",
            q6: "",
            q7: "",
            q8: "",
            q9: "",
            q10: ""
        },
        options = {
            q1: ["", "", "", ""],
            q2: ["", "", "", ""],
            q3: ["", "", "", ""],
            q4: ["", "", "", ""],
            q5: ["", "", "", ""],
            q6: ["", "", "", ""],
            q7: ["", "", "", ""],
            q8: ["", "", "", ""],
            q9: ["", "", "", ""],
            q10: ["", "", "", ""]
        },
        answers = {
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "",
            q6: "",
            q7: "",
            q8: "",
            q9: "",
            q10: ""
        },
        
        // METHODS

        // Initializes the game
        startGame: function() {
            trivia.correctAnswers = 0;
            trivia.incorrectAnswers = 0;
            trivia.noAnswers = 0;
            trivia.currentSet = 0;

            // Display the game section
            $("#gameSection").show();

            // Remove game results from the page
            $("#gameResults").hide();

            // Display the timer
            $("#timeRemaining").show();
            $("#timer").text(trivia.timer);

            // Hide the start button
            $("#start").hide();

            // Ask the first question
            trivia.askQuestion()
        },
        
        askQuestion: function() {
            // Reset the timer
            trivia.timer = 20;
            $("#timer").text(trivia.timer);

            
        },

        checkGuess: function() {

        },

    };

});