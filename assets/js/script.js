//Cannot figure out the local storage save function and stuck on several items

const quiz = {
    questions: [
        {
            question: "Commonly used data types DO NOT include:",
            answers: [
                '1. strings',
                '2. booleans',
                '3. alerts',
                '4. numbers',
            ],
            correctAnswerIndex: 2,
        },
        {
            question: "The condition in an if / else statement is enclosed within _____.",
            answers: [
                '1. quotes', 
                '2. curly brackets', 
                '3. parentheses',
                '4. square brackets',
            ],
            correctAnswerIndex: 2,
        
        },
        {
            question: "Arrays in JavaScript can be used to store _____.",
            answers: [
                '1. numbers and strings', 
                '2. other arrays', 
                '3. booleans', 
                '4. all of the above'
            ],
            correctAnswerIndex: 3,
        },
        {
            question: "String values must be enclosed within _____ when being assigned to variables.",
            answers: [
                '1. commas', 
                '2. curly brackets', 
                '3. quotes',
                '4. parentheses',
            ],
            correctAnswerIndex: 2,
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            answers: [
                '1. JavaScript', 
                '2. terminal / bash', 
                '3. for loops', 
                '4. console.log'
            ],
            correctAnswerIndex: 3,
        }
    ]
};

const game = {
    currentQuestionIndex: 0,
    score: 0,
};

const startBtn = document.getElementById('start-btn');

const gameContainer = document.getElementById('game-container');
const postgameContainer = document.getElementById('postgame-container');
const pregameContainer = document.getElementById('pregame-container');

const gameQuestionContainer = document.getElementById('question');
const gameAnswersContainer = document.getElementById('answers');

function finish() {
    postgameContainer.getElementsByTagName('h1')[0].innerText = `${game.score}/${quiz.questions.length}`;

    gameContainer.classList.add('hide');
    postgameContainer.classList.remove('hide');    
    pregameContainer.classList.add('hide');
}

function reset() {
    game.currentQuestionIndex = 0;
    game.score = 0;

    gameContainer.classList.add('hide');
    postgameContainer.classList.add('hide');    
    pregameContainer.classList.remove('hide');
}

function start() {
    game.currentQuestionIndex = 0;
    game.score = 0;

    gameContainer.classList.remove('hide');
    postgameContainer.classList.add('hide');
    pregameContainer.classList.add('hide');

    ask();
}

function ask() {
    if (game.currentQuestionIndex >= quiz.questions.length) {
        finish();
    }
    else {
        const question = quiz.questions[game.currentQuestionIndex];

        gameQuestionContainer.innerText = question.question;
     
        [...gameAnswersContainer.children].forEach((element, idx) => {
            element.innerText = question.answers[idx];
        });
    }
}

function answer(e) {
    const question = quiz.questions[game.currentQuestionIndex];
    // Cannot figure out if index of clicked button === correct answer index?
    const correct = [...e.target.parentNode.children].indexOf(e.target) === question.correctAnswerIndex;

    game.currentQuestionIndex += 1;
    game.score = correct ? game.score + 1 : game.score;

    ask();
}

// attach listeners

[...gameAnswersContainer.children].forEach(element => {
    element.onclick = answer;
});

startBtn.onclick = start;








