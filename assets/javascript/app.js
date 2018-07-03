// On document ready...
$(document).ready(function() {

    // Hide the timer
    $("#timeRemaining").hide();
    // Start game when button is clicked
    $("#start").on("click", );
    // Check the answer when an option is clicked on the screen
    $(document).on("click", ".option", );

    var trivia = {
        // Trivia properties
        correct = 0,
        incorrect = 0,
        noAnswer = 0,
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
    };

});