var sec = 60
var timer = setInterval(function() { 
   $('#timer').text(sec--);
   if (sec == -1) {
      $('#hideMsg').fadeOut('fast');
      clearInterval(timer);
   } 
}, 1000);


// $(document).on("click", "#submit", showResults() );
// $(document).on("click", ".#startbtn", startQuiz () );





