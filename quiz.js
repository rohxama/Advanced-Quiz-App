import { quizData } from './quizData.js';




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
    quizContainerElem.innerHTML = `
    <h3 style="text-align: center">Quiz Completed! 🎉 <br><br>Your score is ${score} out of ${quizData.length}.</h3>
    <a href="view-details.php" style="display: block; text-align: center; margin-top: 20px; font-size: 18px; text-decoration: none; color: blue;">
        View Details
    </a>
`;
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