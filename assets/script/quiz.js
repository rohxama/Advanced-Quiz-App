const quizData = [
    // HTML Questions
    {
        question: "Which HTML tag is used to define an unordered list?",
        answers: [
            { id: 1, label: "<ol>", correct: false },
            { id: 2, label: "<ul>", correct: true },
            { id: 3, label: "<list>", correct: false },
            { id: 4, label: "<li>", correct: false }
        ]
    },
    {
        question: "How to create a new array in JavaScript?",
        correctCode: "/(var|let|const)\\s+\\w+\\s*=\\s*\\[\\s*\\];/",
        additionalCode: "// Create new array with let keyword",
        explanation: ""
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: [
            { id: 1, label: "<break>", correct: false },
            { id: 2, label: "<br>", correct: true },
            { id: 3, label: "<lb>", correct: false },
            { id: 4, label: "<newline>", correct: false }
        ]
    },
    {
        question: "Which attribute is used to specify the URL of an image in HTML?",
        answers: [
            { id: 1, label: "src", correct: true },
            { id: 2, label: "href", correct: false },
            { id: 3, label: "link", correct: false },
            { id: 4, label: "url", correct: false }
        ]
    },
    {
        question: "Convert a string to uppercase in JavaScript. Write your code below:",
        correctCode: "JAVASCRIPT",
        additionalCode: 'let str = "JavaScript";',
        explanation: ""
    },    
    {
        question: "Which HTML tag is used to define an external stylesheet?",
        answers: [
            { id: 1, label: "<css>", correct: false },
            { id: 2, label: "<link>", correct: true },
            { id: 3, label: "<style>", correct: false },
            { id: 4, label: "<script>", correct: false }
        ]
    },
    {
        question: "What does the meta tag in HTML do?",
        answers: [
            { id: 1, label: "Defines metadata for the document", correct: true },
            { id: 2, label: "Creates a heading", correct: false },
            { id: 3, label: "Inserts images", correct: false },
            { id: 4, label: "Links to other pages", correct: false }
        ]
    },
    // CSS Questions
    {
        question: "Which CSS property controls the text size?",
        answers: [
            { id: 1, label: "font-size", correct: true },
            { id: 2, label: "text-size", correct: false },
            { id: 3, label: "font-style", correct: false },
            { id: 4, label: "text-style", correct: false }
        ]
    },
    {
        question: "How to reverse an array in JavaScript?",
        correctCode: "[5, 4, 1]",
        additionalCode: "let arr = [1, 4, 5];",
        explanation: ""
    },
    {
        question: "Which CSS property is used to change the font family of an element?",
        answers: [
            { id: 1, label: "font-family", correct: true },
            { id: 2, label: "font-weight", correct: false },
            { id: 3, label: "text-font", correct: false },
            { id: 4, label: "font-style", correct: false }
        ]
    },
    {
        question: "How do you select an element with the id 'header' in CSS?",
        answers: [
            { id: 1, label: "#header", correct: true },
            { id: 2, label: ".header", correct: false },
            { id: 3, label: "header", correct: false },
            { id: 4, label: "*header", correct: false }
        ]
    },
    {
        question: "What does the CSS property 'margin' do?",
        answers: [
            { id: 1, label: "Sets the space outside an element", correct: true },
            { id: 2, label: "Sets the space inside an element", correct: false },
            { id: 3, label: "Changes the border style", correct: false },
            { id: 4, label: "Changes the element's position", correct: false }
        ]
    },
    // JavaScript Questions
    {
        question: "Which of the following is a correct way to define a function in JavaScript?",
        answers: [
            { id: 1, label: "function myFunction() {}", correct: true },
            { id: 2, label: "def myFunction() {}", correct: false },
            { id: 3, label: "function: myFunction() {}", correct: false },
            { id: 4, label: "create function myFunction() {}", correct: false }
        ]
    },
    {
        question: "How to check if a variable is an array?",
        correctCode: "true",
        additionalCode: "let arr = [2, 3, 4, 5];",
        explanation: ""
    },    
    {
        question: "NAN == NAN",
        answers: [
            { id: 1, label: "false", correct: true },
            { id: 2, label: "NAN", correct: false },
            { id: 3, label: "0", correct: false },
            { id: 4, label: "true", correct: false }
        ]
    },
    {
        question: "What will `console.log(typeof NaN)` return?",
        answers: [
            { id: 1, label: "number", correct: true },
            { id: 2, label: "undefined", correct: false },
            { id: 3, label: "NaN", correct: false },
            { id: 4, label: "string", correct: false }
        ]
    },
    {
        question: "How to iterate through an array in JavaScript?",
        correctCode: [
            /for\s*\(\s*let\s+\w+\s*=\s*0;\s*\w+\s*<\s*\w+\.length;\s*\w+\+\+\)\s*{/,
            /\w+\.forEach\(\w+=>/,
            /for\s+\w+\s+of\s+\w+/,
            /for\s+\w+\s+in\s+\w+/,
            /\w+\.map\(\w+=>/
        ],
        additionalCode: "// Use any method for array",
        explanation: ""
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        answers: [
            { id: 1, label: "push()", correct: true },
            { id: 2, label: "pop()", correct: false },
            { id: 3, label: "shift()", correct: false },
            { id: 4, label: "unshift()", correct: false }
        ]
    },
    {
        question: "What does '=== ' mean in JavaScript?",
        answers: [
            { id: 1, label: "Strict equality", correct: true },
            { id: 2, label: "Loose equality", correct: false },
            { id: 3, label: "Assignment", correct: false },
            { id: 4, label: "Not equal", correct: false }
        ]
    },
    {
        question: "console.log(true === 1)",
        answers: [
            { id: 1, label: "false", correct: true },
            { id: 2, label: "true", correct: false },
            { id: 3, label: "NaN", correct: false },
            { id: 4, label: "0", correct: false }
        ]
    },
    {
        question: "How to convert a string to array in JavaScript?",
        correctCode: "['H', 'e', 'l', 'l', 'o']",
        additionalCode: "let str = 'Hello';",
        explanation: ""
    },    
    {
        question: "Which event occurs when the user presses a key?",
        answers: [
            { id: 1, label: "onkeydown", correct: true },
            { id: 2, label: "onkeypress", correct: false },
            { id: 3, label: "onkeyup", correct: false },
            { id: 4, label: "onclick", correct: false }
        ]
    },
    {
        question: "Loop an array and sum it in JavaScript?",
        correctCode: "20",
        additionalCode: "let arr = [2, 3, 4, 5, 6];",
        explanation: ""
    },
    {
        question: "What will the following code return? Boolean(0)",
        answers: [
            { id: 1, label: "true", correct: false },
            { id: 2, label: "false", correct: true },
            { id: 3, label: "undefined", correct: false },
            { id: 4, label: "NaN", correct: false }
        ]
    },

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

// EscapeHtml
function escapeHtml(text) {
    return text.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// On start button data renders
quizStartBtn.addEventListener('click', function () {
    quizFormElem.classList.remove('hide');
    quizStartBtn.classList.add('hide');
    showQuestions(quizData[currentQuestionIndex], currentQuestionIndex);
    timer()
});

// Questions renders
function showQuestions(data, index) {
    const output = `
        <h3 class="quiz__question">
            <span class="quiz__number">${index + 1}. </span> 
            ${data.question}
        </h3>
        <div class="quiz__answers"> ${showAnswers(data)}</div>
    `;

    quizContainerElem.innerHTML = output;
}


// Option renders
function showAnswers(data) {
    let output = "";
    if (data.answers) {
        data.answers.forEach(answer => {
            output += `
                <div class="quiz__answer">
                    <input type="radio" name="answer" id="${answer.id}" data-correct='${answer.correct}' required>
                    <label for="${answer.id}">${escapeHtml(answer.label)}</label>
                </div>
            `;
        });
    }
    else if (data.explanation) {
        output += `
            <div class="quiz__code-input">
                <label for="userCode">Write your code here:</label>
                <textarea id="userCode" rows="5" placeholder="Enter your code..."></textarea>
            </div>
        `;
    }

    return output;
}


// On next button click
nextButton.addEventListener('click', (event) => {
    event.preventDefault();

    const currentQuestion = quizData[currentQuestionIndex];
    if (currentQuestion.explanation) {
        const userCode = document.querySelector('#userCode').value.trim(); 
        
        if (!userCode) {
            const isSure = confirm("You haven't entered any code. Are you sure you want to proceed?");
            if (isSure) {
                currentQuestionIndex++;
                if (currentQuestionIndex < quizData.length) {
                    showQuestions(quizData[currentQuestionIndex], currentQuestionIndex);
                } else {
                    checkAnswers();
                    displayResult();
                }
            }
        } else {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                showQuestions(quizData[currentQuestionIndex], currentQuestionIndex);
            } else {
                checkAnswers();
                displayResult();
            }
        }
    } else {
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