export const initform = () => {
    let currentTestIndex = 0;
    let testContainers = JSON.parse(localStorage.getItem("testContainers")) || [];

    // Function to toggle fields based on question type
    function showFields() {
        var questionType = document.getElementById("question_type").value;

        document.getElementById("multiple_choice_fields").style.display = "none";
        document.getElementById("explanation_fields").style.display = "none";
        document.getElementById("fill_in_blank_fields").style.display = "none";

        if (questionType === "multiple_choice") {
            document.getElementById("multiple_choice_fields").style.display = "block";
        } else if (questionType === "explanation") {
            document.getElementById("explanation_fields").style.display = "block";
        } else if (questionType === "fill_in_the_blank") {
            document.getElementById("fill_in_blank_fields").style.display = "block";
        }
    }

    // Function to add a question
    function addQuestion() {
        let questionType = document.getElementById("question_type").value;
        let questionText = document.getElementById("question").value;
        let questionData = { type: questionType, text: questionText };

        if (questionType === "multiple_choice") {
            questionData.options = [
                document.getElementById("option1").value,
                document.getElementById("option2").value,
                document.getElementById("option3").value,
                document.getElementById("option4").value,
            ];
            questionData.correctAnswer = document.getElementById("correct_answer_mc").value;
        } else if (questionType === "explanation") {
            questionData.explanation = document.getElementById("explanation").value;
        } else if (questionType === "fill_in_the_blank") {
            questionData.correctAnswer = document.getElementById("fill_in_the_blank").value;
        }

        // Store the question in localStorage
        if (!testContainers[currentTestIndex]) {
            testContainers[currentTestIndex] = [];
        }
        testContainers[currentTestIndex].push(questionData);
        alert("Question added successfully!");

        localStorage.setItem("testContainers", JSON.stringify(testContainers));

        document.getElementById("testForm").reset();
        showFields(); // Hide extra fields after reset
        displayQuestions();
    }

    // Function to display all questions
    function displayQuestions() {
        let container = document.getElementById("testContainer");
        container.innerHTML = "";

        if (testContainers.length === 0) {
            container.innerHTML = "<p>No tests available. Please add a test.</p>";
            return;
        }

        testContainers.forEach((test, testIndex) => {
            let testElement = document.createElement("div");
            testElement.classList.add("test-block");
            testElement.style.border = "1px solid #ddd";
            testElement.style.padding = "10px";
            testElement.style.marginBottom = "10px";

            testElement.innerHTML = `<h3>Test ${testIndex + 1}</h3>`;

            test.forEach((question, index) => {
                let questionElement = document.createElement("div");
                questionElement.classList.add("question-item");
                questionElement.innerHTML = `<h4>Question ${index + 1}: ${question.text}</h4>`;

                if (question.type === "multiple_choice") {
                    question.options.forEach((option, i) => {
                        questionElement.innerHTML += `<p>Option ${i + 1}: ${option}</p>`;
                    });
                    questionElement.innerHTML += `<p>Correct Answer: ${question.correctAnswer}</p>`;
                } else if (question.type === "explanation") {
                    questionElement.innerHTML += `<p>Explanation: ${question.explanation}</p>`;
                } else if (question.type === "fill_in_the_blank") {
                    questionElement.innerHTML += `<p>Correct Answer: ${question.correctAnswer}</p>`;
                }

                let updateBtn = document.createElement("button");
                updateBtn.innerText = "Update";
                updateBtn.onclick = function () {
                    updateQuestion(testIndex, index);
                };
                questionElement.appendChild(updateBtn);

                let deleteBtn = document.createElement("button");
                deleteBtn.innerText = "Delete";
                deleteBtn.onclick = function () {
                    deleteQuestion(testIndex, index);
                };
                questionElement.appendChild(deleteBtn);

                testElement.appendChild(questionElement);
            });

            container.appendChild(testElement);
        });
    }

    function deleteQuestion(testIndex, questionIndex) {
        testContainers[testIndex].splice(questionIndex, 1);
        localStorage.setItem("testContainers", JSON.stringify(testContainers));
        displayQuestions();
    }

    document.getElementById("addQuestionBtn").onclick = addQuestion;

    window.onload = function () {
        if (testContainers.length > 0) {
            displayQuestions();
        } else {
            document.getElementById("testContainer").innerHTML = "<p>No tests available. Please add a test.</p>";
        }
    };
};

document.addEventListener("DOMContentLoaded", function () {
    initform();
});
