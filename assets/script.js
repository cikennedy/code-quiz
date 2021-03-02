var startButton = document.querySelector(".start-button");

var timer;
var timerCount;

//Check test_status and all variables in the below code 
var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC, chD;

//Created array of questions listed in the .gif file 
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        a: "1. strings",
        b: "2. booleans",
        c: "3. alerts",
        d: "4. numbers",
        answer: "C"
      },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        a: "1. quotes",
        b: "2. curly brackets",
        c: "3. parentheses",
        d: "4. square brackets",
        answer: "C"
      },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        a: "1. numbers and strings",
        b: "2. other arrays",
        c: "3. booleans",
        d: "4. all of the above",
        answer: "D"
      },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        a: "1. commas",
        b: "2. curly brackets",
        c: "3. quotes",
        d: "4. parentheses",
        answer: ""
      },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "1. JavaScript",
        b: "2. terminal / bash",
        c: "3. for loops",
        d: "4. console.log",
        answer: ""
      }
    ];

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

