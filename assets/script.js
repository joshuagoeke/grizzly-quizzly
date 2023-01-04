// User is presented with 5 questions - array of objects
    //  Format for questions???
        // Object that conatins {question: string, Choices: array, answer: string}
        // Display question - loop
        //  append question
        // append choices array

// user selects an answer(button,radio,checkboxes)data-answer = ""
    //  click event is on the parent container
    //  how to know which element was clicked(event.target)
    // if the answer is correct display next quesrion access array of questions object 
    // if answer is incorrect add 15 seconds to score and display next question

    //  When all questions are answered display form to submit initials
    //  save form values score and initials to local STrorage

//  change to highscores HTML
    //  read values from localstorage
    //  append score values to page

var theWholeShebang = [
    question1 = {
        question: "What did Guido von Rossum name his programming language, Python, after?",
        answer1: "Slytherin House",
        answer2: "The snake-like nature of the code",
        answer3: "Monty Python's Flying Circus",
        answer4: "Very long string objects",
        DingDing: 3,
    },

    question2 = {
        question: "The award-winning Monty Python CD-ROM from 1994 was called:",
        answer1: "Life of Brian",
        answer2: "Complete Waste of Time",
        answer3: "Quest for the Holy Grail",
        answer4: "A Fish Called Wanda",
        DingDing: 2,
    },
]