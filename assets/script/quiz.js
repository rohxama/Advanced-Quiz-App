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
    {
        question: "Which tag is used to define a table body in HTML?",
        answers: [
            { id: 1, label: "<table>", correct: false },
            { id: 2, label: "<tab>", correct: false },
            { id: 3, label: "<tbody>", correct: true },
            { id: 4, label: "<tr>", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a hyperlink?",
        answers: [
            { id: 1, label: "<url>", correct: false },
            { id: 2, label: "<link>", correct: false },
            { id: 3, label: "<href>", correct: false },
            { id: 4, label: "<a>", correct: true }
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
        question: "How to create a new array in JavaScript?",
        correctCode: /^(var|let|const)\s+\w+\s*=\s*\[\s*\];$/,
        additionalCode: "Create new array with let keyword",
        explanation: "..."
    },
    {
        question: "How do you select an element with the id 'header' in CSS?",
        answers: [
            { id: 1, label: ".header", correct: false },
            { id: 2, label: "#header", correct: true },
            { id: 3, label: "header", correct: false },
            { id: 4, label: "*header", correct: false }
        ]
    },
    {
        question: "What does the CSS property 'margin' do?",
        answers: [
            { id: 1, label: "Changes the border style", correct: false },
            { id: 2, label: "Sets the space inside an element", correct: false },
            { id: 3, label: "Sets the space outside an element", correct: true },
            { id: 4, label: "Changes the element's position", correct: false }
        ]
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
        question: "How to reverse an array in JavaScript?",
        correctCode: /[5, 4, 1]/,
        additionalCode: "Your array is [1, 4, 5];",
        explanation: "..."
    },
    {
        question: "How to center an element horizontally in CSS?",
        correctCode: /margin:\s*0\s*auto;/,
        additionalCode: "Set the width of the element.",
        explanation: "..."
    },
    {
        question: "What does the z-index property in CSS control?",
        answers: [
            { id: 1, label: "Positioning of elements", correct: false },
            { id: 2, label: "Opacity of elements", correct: false },
            { id: 3, label: "Size of elements", correct: false },
            { id: 4, label: "Layering of elements", correct: true }
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
        question: "What will `console.log(typeof NaN)` return?",
        answers: [
            { id: 1, label: "NaN", correct: false },
            { id: 2, label: "undefined", correct: false },
            { id: 3, label: "number", correct: true },
            { id: 4, label: "string", correct: false }
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
    },
    {
        question: "What does '===' mean in JavaScript?",
        answers: [
            { id: 1, label: "Assigment", correct: false },
            { id: 2, label: "Loose equality", correct: false },
            { id: 3, label: "Strict equality", correct: true },
            { id: 4, label: "Not equal", correct: false }
        ]
    },
    {
        question: "How do you convert a string to an array in JavaScript?",
        correctCode: /['H', 'e', 'l', 'l', 'o']/,
        additionalCode: "Your string is 'Hello'.",
        explanation: "..."
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
        question: "What will the following code return? Boolean(0)",
        answers: [
            { id: 1, label: "true", correct: false },
            { id: 2, label: "false", correct: true },
            { id: 3, label: "undefined", correct: false },
            { id: 4, label: "NaN", correct: false }
        ]
    },
    {
        question: "How do you check if a variable is an array in JavaScript?",
        correctCode: /Array\.isArray\(\w+\)/,
        additionalCode: "Use your variable",
        explanation: "..."
    },
    {
        question: "What is the output of `console.log(1 + '1')`?",
        answers: [
            { id: 1, label: "2", correct: false },
            { id: 2, label: "'1'", correct: false },
            { id: 3, label: "'11'", correct: true },
            { id: 4, label: "NaN", correct: false }
        ]
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { id: 1, label: "var", correct: false },
            { id: 2, label: "let", correct: false },
            { id: 3, label: "const", correct: false },
            { id: 4, label: "All of the above", correct: true }
        ]
    },
    {
        question: "What will the following code return? `typeof null`",
        answers: [
            { id: 1, label: "null", correct: false },
            { id: 2, label: "object", correct: true },
            { id: 3, label: "undefined", correct: false },
            { id: 4, label: "boolean", correct: false }
        ]
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
        question: "How to iterate through an array in JavaScript?",
        correctCode: [
            /for\s*\(\s*let\s+\w+\s*=\s*0;\s*\w+\s*<\s*\w+\.length;\s*\w+\+\+\)\s*{/,
            /\w+\.forEach\(\w+=>/,
            /for\s+\w+\s+of\s+\w+/,
            /for\s+\w+\s+in\s+\w+/,
            /\w+\.map\(\w+=>/
        ],
        additionalCode: "Use any method for array",
        explanation: "..."
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
        correctCode: /['H', 'e', 'l', 'l', 'o']/,
        additionalCode: "Your string is 'Hello';",
        explanation: "..."
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
    const userCodeElement = document.querySelector('#userCode');
    if (userCodeElement) {
        userCodeElement.value = ''; 
    }
}

// Option renders
function showAnswers(data) {
    let output = "";

    // Check if the data has answers
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
    
    // Check if the data has explanation and additional code
    else if (data.explanation) {
        output += `
        <div class="quiz__code-input">
            <div id="preFilledCode" style="border-radius: 7px; padding: 8px; background-color: green; min-height: 20px; overflow: auto;" contenteditable="false">
             ${escapeHtml(data.additionalCode || '')}
            </div>
            <label for="userCode">Your Code:</label>
            <textarea id="userCode" rows="5" placeholder="Write your code here..."></textarea>
        </div>
    `;
    }

    return output;
}

// On next button click
nextButton.addEventListener('click', (event) => {
    event.preventDefault();

    const currentQuestion = quizData[currentQuestionIndex];
    const userCodeElement = document.querySelector('#userCode');
    const userCode = userCodeElement ? userCodeElement.value.trim() : null;


    // For multiple-choice questions
    if (currentQuestion.answers) {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        

        if (!selectedAnswer) {
            alert("Please select an option before moving to the next question.");
            return;
        }

        if (selectedAnswer && JSON.parse(selectedAnswer.dataset.correct)) {
            score++;
        }
    } 

    // For code-based questions

    else if (userCodeElement) {
        if (!userCode) {
            const confirmNext = confirm("Are you sure you want to move to the next question cause you left the box empty?");
            if (!confirmNext) {
                return; 
            }
        } else {
            checkCodeAnswer(currentQuestion, userCode);
        }
    }


    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestions(quizData[currentQuestionIndex], currentQuestionIndex);
    } else {
        displayResult();
    }
});


// Check code-based answers
function checkCodeAnswer(question, userCode) {
    try {

        // For regular expression
        if (question.correctCode instanceof RegExp) {
            if (question.correctCode.test(userCode)) {
                score++;
                alert("Great You did it!");
            } else {
                alert("Ooh no Wrong!");
            }
        }

        // For specific result
        else if (typeof question.correctCode === 'string' || typeof question.correctCode === 'number') {
            const evaluatedCode = eval(userCode); 
            if (evaluatedCode === question.correctCode) {
                score++;
                alert("Great You did it!");
            } else {
                alert("Ooh no Wrong!");
            }
        }

        else if (Array.isArray(question.correctCode)) {
            const isCorrect = question.correctCode.some((regex) => regex.test(userCode));
            if (isCorrect) {
                score++;
                alert("Correct explanation!");
            } else {
                alert("Incorrect explanation!");
            }
        }
    } catch (e) {
        console.error("Error evaluating code:", e);
    }
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