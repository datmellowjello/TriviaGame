$(document).ready(function(){
  
// need start quiz funtion 
function startQuiz() {

}
// need results function to check for answers
function showResults () {

}
// call star quiz funtion 
showResults ();
// need array for questions
var questions = [
{
    question: "Who did the first 900?",
    answers: {
        a: "Tony Hawk",
        b: "Bob Burnquist",
        c: "Steve Caballero",
        d: "Ryan Sheckler",
    correctAnswer: "a",
    }
    },
    { 
        question: "What skateboard deck company does Chris Cole ride for?",
    answers: {
        a: "birdhouse",
        b: "zero",
        c: "mystery",
        d: "baker",
    correctAnswer: "b",
    }
    },
    { 
        question: "What year was Powell Peralta founded?",
    answers: {
        a: "1950",
        b: "1973",
        c: "1978",
        d: "1985",
    correctAnswer: "c",
    }
    },


]



// need variables to store wins , losses and results

var quizContainer = $("#quiz")
var resultsContainer = $("#results")
var submit = $("#submit")




$(document).on("click", "#submit", showResults() );
$(document).on("click", ".#startbtn", startQuiz () );
)};
