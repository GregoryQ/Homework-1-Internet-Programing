


//var p = document.getElementById("xx").textContent.style.display;
var attempt = 0;
var answers = [
    "an object-oriented computer programming language commonly used to create interactive effects within web browsers.",
    "1995",
    "string",
    "<script>",
    "document.getElementbyID('demo').innerHTML='hello World';",
    "both head and body",
    "<script src='xxx.js'>",
    "alert('Hello World')",
    "function myFunction()",
    "myFunction()",
];

var score = 0;
var Correct = document.getElementById("User_Score");
var Incorrect = document.getElementById("Comp_Score");

function check() {
    var question_1 = document.Quiz.Q1.value;
    var question_2 = document.Quiz.Q2.value;
    var question_3 = document.Quiz.Q3.value;
    var question_4 = document.Quiz.Q4.value;
    var question_5 = document.Quiz.Q5.value;
    var question_6 = document.Quiz.Q6.value;
    var question_7 = document.Quiz.Q7.value;
    var question_8 = document.Quiz.Q8.value;
    var question_9 = document.Quiz.Q9.value;
    var question_10 = document.Quiz.Q10.value;



    var questions = [question_1, question_2, question_3, question_4, question_5, question_6, question_7, question_8, question_9, question_10];

    for (i = 0; i < 10; i++) {
        if (questions[i] == answers[i]) {
            score += 1;
            Correct.textContent = score;
            Incorrect.innerHTML = 10 - score;


        }
    }
}

function submitQuiz() {
    score=0;
    check();
    console.log("score: " + score);
    attempt = 1;
}

function retry() {

    if (attempt == 0) {
        alert("Cannot retry without first submitting quiz");

        return;
    }
    else
        score = 0;
    Correct.textContent = 0;
    Incorrect.innerHTML = 0;
    attempt = 0;
    window.location.replace("./index.html");
}
