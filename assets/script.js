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
    var timeLeft;

    var timerEl = document.querySelector('#timer');
    var score = 0;
    var scoreEl = document.querySelector('#score');
    // var qCounter;
    var doneScreen = document.querySelector('.all-done');
    var doneForm = document.querySelector('.done-form');
    var doneButtons = document.querySelectorAll('.btn done');

    var submitInitials = document.querySelector('initialbox');

    var scoreArray = [];
    var sortedScores = [];
    var yoMaMa = [
        { initials: "MA", scored: 98,},
        { initials: "YO", scored: 100,},
        { initials: "MA", scored: 99,},
        { initials: "MA", scored: 15,},
        { initials: "YO", scored: 17,},
        { initials: "MA", scored: 16,},
        { initials: "MA", scored: 10,},
        { initials: "YO", scored: 20,},
        { initials: "MA", scored: 0,},
        { initials: "MA", scored: 70,},
        { initials: "MA", scored: 0,},
        { initials: "MA", scored: 0,},
    ];
    // sortedScores = yoMaMa; //FIX
    var liveQuestion = document.querySelector("#question");
    var gamEl = document.querySelector('#game');
    
    var liveOption0 = document.querySelector('#option0');
    var liveOption1 = document.querySelector('#option1');
    var liveOption2 = document.querySelector('#option2');
    var liveOption3 = document.querySelector('#option3');

var qBank = [
    {
        question: "What did Guido von Rossum name his programming language, Python, after?",
        answers: ["Slytherin House","The snake-like nature of the code", "Monty Python's Flying Circus", "Very long string objects",],
        DingDing: 2,
    },
    {
        question: "The award-winning Monty Python CD-ROM from 1994 was called:",
        answers: ["Life of Brian", "Complete Waste of Time", "Quest for the Holy Grail", "A Fish Called Wanda",],
        DingDing: 1,
    },
    {
        question: "What is the air-speed velocity of an unladen swallow?",
        answers: ["42", "Complete Waste of Time", "9.8 m/s^2", "An African or a European Swallow?",],
        DingDing: 3,
    },
    {
        question: "Which Actor was in Harry Potter films and A Fish Called Wanda?",
        answers: ["John Cleese", "Terry Jones", "Eric Idle", "Michael Palin",],
        DingDing: 0,
    },
    {
        question: "To what shalt thou count when hurling the Holy Hand Grenade of Antioch?",
        answers: ["1", "2", "3", "5",],
        DingDing: 2,
    },
];

// FUNCTIONS

// qCounter = 0;
// function questionDisplay(){


function nextQuestion(){
    qCounter++;
};

function init(){
    // var tempArray = [];
    // tempArray.push(JSON.parse(localStorage.getItem("top10HighScores")));
    //     sortedScores = tempArray[0];
    //     console.log("from local storage: " + sortedScores);
    // if (sortedScores.length <1){
    //     sortedScores = yoMaMa;
    //     console.log("unsorted: " + JSON.stringify(sortedScores));
    // } else {
    //     var tempArray = [];
    //     tempArray.push(JSON.parse(localStorage.getItem("top10HighScores")));
    //     sortedScores = tempArray[0];
    //     console.log("from local storage: " + sortedScores);
    // };
    qCounter = 0;
    console.log("init qCounter: " + qCounter);
    // runGame();
    countDown();
};

init();

//DISPLAY
// function runGame{
liveQuestion.textContent = qBank[qCounter].question; 
liveOption0.textContent = qBank[qCounter].answers[0];
liveOption1.textContent = qBank[qCounter].answers[1];
liveOption2.textContent = qBank[qCounter].answers[2];
liveOption3.textContent = qBank[qCounter].answers[3];
// };

// would have been so good
// console.log((qBank[0].answers[qBank[0].DingDing]));


// countDown();

//GRADER

gamEl.addEventListener("click", function(event) {
    var element = event.target;
    var picked = element
    // console.log(picked);
    if (element.matches('.btn abcd-container')){
        picked = Number(element.getAttribute("data-pick"));
        console.log(picked);
    }else{
        picked = Number(element.getAttribute("data-pick"));
        console.log(picked);
    };
    if (picked == qBank[qCounter].DingDing){
        score = score + 10;
        scoreEl.textContent = score;
        nextQuestion()
            if (timeLeft <= 0 || qCounter >=5){
                gameOver();
            };
    }else{
        timeLeft = timeLeft -15;
        timerEl.textContent = timeLeft;
        nextQuestion()
            if (timeLeft <= 0 || qCounter >=5){
                gameOver();
            };
        
    }
});

//TIMER

function countDown(){
    timeLeft = 90;
    timerEl.textContent = timeLeft;
    var timeInterval = setInterval(function (){
        if (timeLeft > 0){
            timeLeft--;
            timerEl.textContent = timeLeft;
        } else {
            timerEl.textContent = "done"
            gameOver();
            clearInterval(timeInterval);
            
        }
    }, 1000);
};


function gameOver(){
    gamEl.style.display = "none";
    doneScreen.style.display = "block";
    score = document.getElementById("score").textContent = Number(timeLeft) + score;
    console.log(score);
    if (score < 0){
        score = 0};
        console.log(score);
    }

// function putYourNameOnIt(){
    
// }



function recordScore(){
    submitInitials = document.getElementById("initialbox").value;
        // console.log(submitInitials);
    
    var lastScore = {
        initials: JSON.stringify(submitInitials),
        scored: score,
    };
    // console.log(lastScore);
    scoreArray.push(lastScore);
    // console.log(scoreArray);
    sortedScores.push(scoreArray[0]);
    sortedScores.sort((a,b)=> b.scored - a.scored);
    // console.log(sortedScores);
    document.getElementById('initialbox').value = '';
    //make form disappear after click -FIX
    doneForm.style.display = "none";
    // doneButtons.style.display = "block";
    storeTenScores(sortedScores);
};

// recordScore();

function storeTenScores(array){
    var topTen = array.splice(0, 10);
    localStorage.setItem("top10HighScores", JSON.stringify(topTen))
};

// localStorage.setItem("scoreArray", JSON.stringify(scoreArray));

// localStorage.setItem("score", JSON.stringify(score));

// var scoreListEl = document.querySelector('.score-list');
// var scoreListItem = document.createElement('li');

// scoreListItem.textContent = JSON.parse(localStorage.getItem("score"));
// console.log(scoreListItem);
// scoreListEl.appendChild(scoreListItem);
//make for loop to make li elements and fill them with text from local storage


