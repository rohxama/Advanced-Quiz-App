export const quizData = [
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
        additionalCode: "Center the element named as '.centered'.",
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
        additionalCode: "Use any variable name",
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