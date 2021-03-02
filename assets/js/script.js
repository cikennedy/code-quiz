const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')

let shuffledQuestions, currentQuestionIndex

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions)[currentQuestionIndex]
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.textbutton.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElements.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


// the below function is relevant to the stylized colored buttons and next buttons on the tutorial
function selectAnswer() {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

// the below function is relevant to the stylized colored buttons and next buttons on the tutorial
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classlist.add('correct')
    } else {
        element.classList.add('wrong')
    }
}


//Created array of questions listed in the .gif file 
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            {text: '1. strings', correct: false},
            {text: '2. booleans', correct: false},
            {text: '3. alerts', correct: true},
            {text: '4. numbers', correct: false}
        ] 
      },
      
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        answers: [
            {text: '1. quotes', correct: false},
            {text: '2. curly brackets', correct: false},
            {text: '3. parentheses', correct: true},
            {text: '4. square brackets', correct: false}
        ]
    
      },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: [
            {text: '1. numbers and strings', correct: false},
            {text: '2. other arrays', correct: false},
            {text: '3. booleans', correct: false},
            {text: '4. all of the above', correct: true}
        ]
      },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: [
            {text: '1. commas', correct: false},
            {text: '2. curly brackets', correct: false},
            {text: '3. quotes', correct: true},
            {text: '4. parentheses', correct: true}
        ]
      },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: '1. JavaScript', correct: false},
            {text: '2. terminal / bash', correct: false},
            {text: '3. for loops', correct: true},
            {text: '4. console.log', correct: true}
        ]
      }
    ];








