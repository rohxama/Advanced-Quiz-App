const quizData = [{
    question: "In JavaScript, what value is returned by default when a function doesn't have a return statement?",
    answers: [
        { id: 1, label: "0", correct: false },
        { id: 2, label: "null", correct: false },
        { id: 3, label: "undefined", correct: true },
        { id: 4, label: "-1", correct: false }
    ]
},
{
    question: "What is the output of `typeof null` in JavaScript?",
    answers: [
        { id: 1, label: "object", correct: true },
        { id: 2, label: "null", correct: false },
        { id: 3, label: "undefined", correct: false },
        { id: 4, label: "number", correct: false }
    ]
},
{
    question: "How do you declare a variable in JavaScript?",
    answers: [
        { id: 1, label: "var variableName;", correct: true },
        { id: 2, label: "variableName = var;", correct: false },
        { id: 3, label: "declare variableName;", correct: false },
        { id: 4, label: "let variable Name", correct: false }
    ]
},
{
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
        { id: 1, label: "String", correct: false },
        { id: 2, label: "Boolean", correct: false },
        { id: 3, label: "Integer", correct: true },
        { id: 4, label: "Number", correct: false }
    ]
},
{
    question: "How can you create a function in JavaScript?",
    answers: [
        { id: 1, label: "function myFunction() {}", correct: true },
        { id: 2, label: "create function myFunction() {}", correct: false },
        { id: 3, label: "function: myFunction() {}", correct: false },
        { id: 4, label: "def myFunction() {}", correct: false }
    ]
},
{
    question: "Which HTML attribute is used to define inline CSS styles?",
    answers: [
        { id: 1, label: "id", correct: false },
        { id: 2, label: "class", correct: false },
        { id: 3, label: "style", correct: true },
        { id: 4, label: "css", correct: false }
    ]
},
{
    question: "What does DOM stand for in web development?",
    answers: [
        { id: 1, label: "Dynamic Object Model", correct: false },
        { id: 2, label: "Data Object Model", correct: false },
        { id: 3, label: "Document Oriented Model", correct: false },
        { id: 4, label: "Document Object Model ", correct: true }
    ]
},
{
    question: "How do you select an elements with the ID using JavaScript?",
    answers: [
        { id: 1, label: "document.getElementById()", correct: true },
        { id: 2, label: "document.querySelector()", correct: false },
        { id: 3, label: "document.getElementByClass()", correct: false },
        { id: 4, label: "document.selectElementById()", correct: false }
    ]
},
{
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    answers: [
        { id: 1, label: "push()", correct: true },
        { id: 2, label: "pop()", correct: false },
        { id: 3, label: "shift()", correct: false },
        { id: 4, label: "unshift()", correct: false }
    ]
}, {
    question: "How to write an IF statement in JavaScript?",
    answers: [
        { id: 1, label: "if i = 5", correct: false },
        { id: 2, label: "if (i == 5)", correct: true },
        { id: 3, label: "if i == 5 then", correct: false }
    ]
},
{
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: [
        { id: 1, label: "onmouseover", correct: false },
        { id: 2, label: "onclick", correct: true },
        { id: 3, label: "onchange", correct: false },
        { id: 4, label: "onmouseclick", correct: false }
    ]
},
{
    question: "What does SCSS stand for?",
    answers: [
        { id: 1, label: "Sassy CSS", correct: true },
        { id: 2, label: "Super-powered CSS", correct: false },
        { id: 3, label: "Sass CSS", correct: false },
        { id: 4, label: "Syntactic CSS", correct: false }
    ]
}
];

let quizFormElem = document.getElementById('quiz-form');
let quizContainerElem = document.getElementById('quiz-container');
let quizRestartBtn = document.getElementById('quiz-restart-btn');
let quizStartBtn = document.getElementById('quiz-start-btn');
let nextButton = document.getElementById('quiz-next-btn');
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let seconds = 0;
let minutes = 0;
let timerInterval;


// On start button data renders
quizStartBtn.addEventListener('click', function() {
quizFormElem.classList.remove('hide');
quizStartBtn.classList.add('hide');
showQuestions(quizData[currentQuestionIndex], currentQuestionIndex);
timer()
});

// Questions renders
function showQuestions(data, index) {
const output = `<h3 class="quiz__question"><span class="quiz__number"> ${index + 1}. </span> ${data.question} </h3>
<div class="quiz__answers"> ${showOptions(data.answers)}</div>`;

quizContainerElem.innerHTML = output;
}

// Option renders
function showOptions(answers) {
let output = "";

answers.forEach(answer => {
    output += `<div class="quiz__answer">
        <input type="radio" name="answer" id="${answer.id}" data-correct='${answer.correct}' required>
        <label for="${answer.id}">${answer.label}</label>
    </div>`;
});

return output;
}

// On next button click
nextButton.addEventListener('click', (event) => {
event.preventDefault();

const selectedOption = document.querySelector('input[name="answer"]:checked');

if (selectedOption) {
    userAnswers.push(selectedOption.getAttribute('data-correct') === 'true');
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestions(quizData[currentQuestionIndex], currentQuestionIndex);
    } else {
        checkAnswers();
        displayResult();
    }
} else {
    alert("Please select at least one answer.");
}
});

// Check correct answers
function checkAnswers() {
userAnswers.forEach((isCorrect) => {
    if (isCorrect) {
        score++;
    }
});
}

// Display results
function displayResult() {
quizContainerElem.innerHTML = `<h3 style = "text-align : center">Quiz Completed! 🎉 <br> <br> Your score is ${score} out of ${quizData.length}.</h3>`;
nextButton.classList.add('hide');

clearInterval(timerInterval);
}

// On restart button
function reset() {
currentQuestionIndex = 0;
userAnswers = [];
score = 0;

showQuestions(quizData[currentQuestionIndex], currentQuestionIndex);

quizStartBtn.classList.remove('hide');
quizFormElem.classList.add('hide');

nextButton.classList.remove('hide');

seconds = 0;
minutes = 0;
document.getElementById('quiz-timer').innerHTML = '00:00';
timer();
}

quizRestartBtn.addEventListener('click', () => {
reset();

})

// Timer function
function timer() {
const quizTimerElem = document.getElementById('quiz-timer');

timerInterval = setInterval(() => {
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    quizTimerElem.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    seconds++;


}, 1000);
}