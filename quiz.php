<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>

    <link rel="stylesheet" href="./assets/style/style.css">

    <style>
        :root {
    --shadow-color: rgba(0, 0, 0, 0.15);
    --clr-neutral-500: #1c232b;
    --clr-neutral-400: #28323E;
    --clr-neutral-300: #384656;
    --clr-neutral-200: #51657B;
    --clr-neutral-100: #E6EAEF;
    --black: #000;
}
        
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--clr-neutral-300);
    border-radius: 5px;
    padding: 0.6em 1.4em;
    background-color: transparent;
    color: var(--clr-neutral-100);
    font-weight: var(--font-weight-6);
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
}

.btn:is(:hover, :focus-visible) {
    background-color: var(--clr-neutral-400);
}

.button {
    position: relative;
    margin: 0;
    padding: 0.6em 1.4em;
    outline: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    background-color: var(--clr-neutral-400);
    border-radius:5px;
    color: var(--clr-neutral-100);
    font-family: inherit;
    z-index: 0;
    overflow: hidden;
    letter-spacing: 0.05em;
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}

.button:hover {
    animation: sh0 0.5s ease-in-out both;
}

@keyframes sh0 {
    0% {
        transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
        transform: rotate(7deg) translate3d(0, 0, 0);
    }
    50% {
        transform: rotate(-7deg) translate3d(0, 0, 0);
    }
    75% {
        transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
        transform: rotate(0deg) translate3d(0, 0, 0);
    }
}

.button:hover span {
    animation: storm 0.7s ease-in-out both;
    animation-delay: 0.06s;
}

.button::before,
.button::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    z-index: -1;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
}

button:hover::before,
button:hover::after {
    opacity: 0.15;
    transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
}

button:hover::before {
    transform: translate3d(50%, 0, 0) scale(0.9);
}

button:hover::after {
    transform: translate(50%, 0) scale(1.1);
}


/*------------------------------------*\
  #QUIZ
\*------------------------------------*/

.quiz {
    display: grid;
    gap: 30px;
    width: min(100% - 1rem, 40rem);
    margin-block: 2rem;
    padding: 2rem;
    border: 1px solid var(--clr-neutral-300);
    border-radius: 8px;
}

#quiz-container {
    display: grid;
    gap: 1rem;
}

.quiz__answers {
    display: grid;
    gap: 0.5rem;
}

.quiz__answer {
    display: grid;
    grid-template-columns: auto 1fr;
    background-color: var(--clr-neutral-400);
    padding-inline: 0.5em;
    border-radius:5px;
    border: 1px solid var(--clr-neutral-300);
    overflow: hidden;
}

.quiz__answer:is(:hover, :focus-within) {
    background-color: var(--clr-neutral-300);
}

.quiz__answer>label {
    padding: 0.5em 1em;
}

.quiz__info {
    display: grid;
    gap: 30px;
    align-items: center;
    justify-items: center;
}

.quiz-body{
        display: grid;
        place-items: center;
        min-height: 100vh;
        background-color: var(--clr-neutral-500);
        color: var(--clr-neutral-100);
        font-family: system-ui, sans-serif;
        line-height: 1.5;
    
}
.quiz__code-input{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
#userCode{
    border-radius: 8px;
    background: transparent;
    color: white;
    outline: none;
}

@media (min-width: 30em) {
    .quiz__info {
        justify-items: start;
        grid-template-columns: 1fr auto;
    }
}

.quiz__time {
    font-style: oblique;
}

.hide {
    display: none;
}
    </style>
</head>


<body class="quiz-body">
    <button class="button" id="quiz-start-btn">Start</button>
    <form class="quiz hide" id="quiz-form">
    <div id="quiz-container">
    </div>
    <div class="quiz__info">
        <p class="quiz__time" id="quiz-timer">00:00</p>
        <div class="button-group">
            <button class="quiz__reset btn" id="quiz-restart-btn" data-type="warning" type="button">Restart</button>
            <button id="quiz-next-btn" class="quiz__next btn" data-type="primary" type="submit">Next</button>
        </div>
    </div>
</form>


    <script src="./assets/script/quiz.js"></script>
    
</body>
</html>