export const initform = () => {
    let currentTestIndex = 0;
    let testContainers = JSON.parse(localStorage.getItem("testContainers")) || [];

    // Function to show the correct input fields based on question type
    function showFields() {
        var questionType = document.getElementById("question_type").value;

        // Hide all fields first
        document.getElementById("multiple_choice_fields").style.display = "none";
        document.getElementById("explanation_fields").style.display = "none";

        // Show specific fields based on the question type
        if (questionType === "multiple_choice") {
            document.getElementById("multiple_choice_fields").style.display = "block";
        } else if (questionType === "explanation") {
            document.getElementById("explanation_fields").style.display = "block";
        }
    }

    // Add a new question to the test
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
        }

        // Check if the current test index exists and add the question
        if (!testContainers[currentTestIndex]) {
            testContainers[currentTestIndex] = [];
        }
        testContainers[currentTestIndex].push(questionData);
        alert("Question added successfully!");

        // Save the updated testContainers to localStorage
        localStorage.setItem("testContainers", JSON.stringify(testContainers));

        // Reset the form and display the updated questions
        document.getElementById("testForm").reset();
        showFields();
        displayQuestions();
    }

    // Display all the questions for the current test
    function displayQuestions() {
        let container = document.getElementById("testContainer");
        container.innerHTML = "";

        if (testContainers.length === 0) {
            container.innerHTML = "<p>No tests available. Please add a test.</p>";
            return;
        }

        // Loop through the tests and display each one
        testContainers.forEach((test, testIndex) => {
            let testElement = document.createElement("div");
            testElement.classList.add("test-block");
            testElement.style.padding = "10px";
            testElement.style.marginBottom = "40px";

            // Using string template and createElement for proper HTML rendering
            let heading = document.createElement("h3");
            heading.classList.add("heading-primary");
            heading.textContent = `Test ${testIndex + 1}`;
            testElement.appendChild(heading);

            test.forEach((question, index) => {
                let questionElement = document.createElement("div");
                questionElement.classList.add("question-item");

                // Create question title
                let questionTitle = document.createElement("h4");
                questionTitle.classList.add("heading-tertiary");
                questionTitle.textContent = `Question ${index + 1}: ${question.text}`;
                questionElement.appendChild(questionTitle);

                if (question.type === "multiple_choice") {
                    question.options.forEach((option, i) => {
                        let optionElement = document.createElement("p");
                        optionElement.textContent = `Option ${i + 1}: ${option}`;
                        questionElement.appendChild(optionElement);
                    });
                    let correctAnswerElement = document.createElement("p");
                    correctAnswerElement.textContent = `Correct Answer: ${question.correctAnswer}`;
                    questionElement.appendChild(correctAnswerElement);
                } else if (question.type === "explanation") {
                    let explanationElement = document.createElement("p");
                    explanationElement.textContent = `Explanation: ${question.explanation}`;
                    questionElement.appendChild(explanationElement);
                }

                // Add Update button
                let updateBtn = document.createElement("button");
                updateBtn.innerText = "Update";
                updateBtn.classList.add("update-btn");
                updateBtn.onclick = function () {
                    updateQuestion(testIndex, index);
                };
                questionElement.appendChild(updateBtn);

                // Add Delete button
                let deleteBtn = document.createElement("button");
                deleteBtn.innerText = "Delete";
                deleteBtn.classList.add("delete-btn");
                deleteBtn.onclick = function () {
                    deleteQuestion(testIndex, index);
                };
                questionElement.appendChild(deleteBtn);

                testElement.appendChild(questionElement);
            });

            container.appendChild(testElement);
        });
    }

    // Delete a question from the test
    function deleteQuestion(testIndex, questionIndex) {
        testContainers[testIndex].splice(questionIndex, 1);
        localStorage.setItem("testContainers", JSON.stringify(testContainers));
        displayQuestions();
    }

    // Show fields based on question type selection
    document.getElementById("question_type").onchange = showFields;

    // Add question button action
    document.getElementById("addQuestionBtn").onclick = addQuestion;

    // Update a question
    function updateQuestion(testIndex, questionIndex) {
        let questionData = testContainers[testIndex][questionIndex];

        // Show the modal
        document.getElementById("editQuestionModal").style.display = "block";

        // Reset the modal and hide all input fields
        document.getElementById("editForm").reset();
        document.getElementById("edit_multiple_choice_fields").style.display = "none";
        document.getElementById("edit_explanation_fields").style.display = "none";

        // Fill the form with the question data
        document.getElementById("edit_question").value = questionData.text;

        if (questionData.type === "multiple_choice") {
            document.getElementById("edit_multiple_choice_fields").style.display = "block";
            document.getElementById("edit_option1").value = questionData.options[0];
            document.getElementById("edit_option2").value = questionData.options[1];
            document.getElementById("edit_option3").value = questionData.options[2];
            document.getElementById("edit_option4").value = questionData.options[3];
            document.getElementById("edit_correct_answer_mc").value = questionData.correctAnswer;
        } else if (questionData.type === "explanation") {
            document.getElementById("edit_explanation_fields").style.display = "block";
            document.getElementById("edit_explanation").value = questionData.explanation;
        }

        // Save the updated question
        document.getElementById("saveQuestionBtn").onclick = function () {
            questionData.text = document.getElementById("edit_question").value;

            if (questionData.type === "multiple_choice") {
                questionData.options = [
                    document.getElementById("edit_option1").value,
                    document.getElementById("edit_option2").value,
                    document.getElementById("edit_option3").value,
                    document.getElementById("edit_option4").value
                ];
                questionData.correctAnswer = document.getElementById("edit_correct_answer_mc").value;
            } else if (questionData.type === "explanation") {
                questionData.explanation = document.getElementById("edit_explanation").value;
            }

            // Update localStorage and refresh the questions
            testContainers[testIndex][questionIndex] = questionData;
            localStorage.setItem("testContainers", JSON.stringify(testContainers));

            // Close the modal and refresh questions
            document.getElementById("editQuestionModal").style.display = "none";
            displayQuestions();
        };
    }

    // Close the modal
    document.getElementById("closeModal").onclick = function () {
        document.getElementById("editQuestionModal").style.display = "none";
    };

    // Initialize and display questions when the page loads
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
