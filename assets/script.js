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

//Variables
    var liveQuestion = document.querySelector("#question");
    // var liveAnswerStem = document.querySelector('.abcd-container');
    
    var livePrefixA = document.querySelector('#A');
    var livePrefixB = document.querySelector('#B');
    var livePrefixC = document.querySelector('#C');
    var livePrefixD = document.querySelector('#D');

    var liveOption0 = document.querySelector('#option0');
    var liveOption1 = document.querySelector('#option1');
    var liveOption2 = document.querySelector('#option2');
    var liveOption3 = document.querySelector('#option3');

var theWholeShebang = [
    {
        question: "What did Guido von Rossum name his programming language, Python, after?",
        answer1: "Slytherin House",
        answer2: "The snake-like nature of the code",
        answer3: "Monty Python's Flying Circus",
        answer4: "Very long string objects",
        DingDing: 2,
    },
    {
        question: "The award-winning Monty Python CD-ROM from 1994 was called:",
        answer1: "Life of Brian",
        answer2: "Complete Waste of Time",
        answer3: "Quest for the Holy Grail",
        answer4: "A Fish Called Wanda",
        DingDing: 1,
    },
    {
        question: "What is the air-speed velocity of an unladen swallow?",
        answer1: "42",
        answer2: "Complete Waste of Time",
        answer3: "9.8 m/s^2",
        answer4: "An African or a European Swallow?",
        DingDing: 3,
    },
    {
        question: "Which Actor was in Harry Potter films and A Fish Called Wanda?",
        answer1: "John Cleese",
        answer2: "Terry Jones",
        answer3: "Eric Idle",
        answer4: "Michael Palin",
        DingDing: 0,
    },
    {
        question: "To what shalt thou count when hurling the Holy Hand Grenade of Antioch?",
        answer1: "1",
        answer2: "2",
        answer3: "3",
        answer4: "5",
        DingDing: 2,
    },
];

// Functions

// function questionCounter(){


liveQuestion.textContent = theWholeShebang[0].question; 
liveOption0.textContent = theWholeShebang[0].answer1;
liveOption1.textContent = theWholeShebang[0].answer2;
liveOption2.textContent = theWholeShebang[0].answer3;
liveOption3.textContent = theWholeShebang[0].answer4;

// }; //function wrapper
console.log((theWholeShebang[1].question));

