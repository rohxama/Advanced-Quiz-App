<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MCQZONE-Result</title>
    <link rel="stylesheet" href="./assets/style/style.css">
    <style>
        th,
        td {
            padding: 20px;
            text-align: center;
            border-right: 1px solid var(--clr-neutral-200);
        }
        body{
            margin: 50px 0px 0px ;
        }
        h1{
            color: #28323E;
            font-size: 3rem;
            font-weight: 700;
            text-transform: uppercase;
            text-align: center;
            margin: auto;
        }
        table{
            margin-top: 50px;
        }
    </style>
</head>

<body>

    <h1>Quiz Answers</h1>
    <table id="quizTable">
        <thead>
            <tr>
                <th>#</th>
                <th>Questions</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
                <th>Option 4</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <script type="module">
        import { quizData } from './././quizData.js';

        const quizTableBody = document.querySelector('#quizTable tbody');

        quizData.forEach((item, index) => { // Added index parameter for numbering
            // Skip questions with explanation property
            if (item.explanation) {
                return;
            }

            const row = document.createElement('tr');

            // Create a cell for numbering
            const numberCell = document.createElement('td');
            numberCell.textContent = index + 1; // Displaying the index + 1 for numbering
            row.appendChild(numberCell);

            const questionCell = document.createElement('td');
            questionCell.textContent = item.question;
            row.appendChild(questionCell);

            item.answers.forEach(answer => {
                const answerCell = document.createElement('td');
                answerCell.innerHTML = `${escapeHtml(answer.label)} ${answer.correct ? '✅' : '❌'}`;
                row.appendChild(answerCell);
            });

            quizTableBody.appendChild(row);
        });

        function escapeHtml(text) {
            return text.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }
    </script>



</body>

</html>