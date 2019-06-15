$(document).ready(function () {
    console.log("ready!");
    $("#quiz").hide();
    $("#results").hide();
    $("#startbtn").on("click", function () {
        startQuiz()
    });
    $("#submit").on("click", function () {

        checkAnswers();
        results ();

    });
   var correctAnswers = 0;
    var incorrectAnswers = 0;
    function checkAnswers() {

    $('.aQuestion').each(function(){
        if($(this).find('input[type="radio"]:checked').val() > 0)
          {
             correctAnswers++;
          }
        else
          {
             incorrectAnswers++;
          }    
      });
      
   };
 
    function results () {
        $("#quiz").hide();
        $("#splashScreen").hide();
        $("#results").show();
        $(".correct").append(correctAnswers);
        $(".incorrect").append(incorrectAnswers);


    }
    function timesUp() {
        $("#quiz").hide();
        $("#splashScreen").hide();
        $('body').html($('<div class="timesup"></div>'));
        $(".timesup").html("<h2>Sorry too slow! Times Up!</h2>")

    };

    function startTimer() {
        var sec = 60
        var timer = setInterval(function () {
            $('#timer').text(sec--);
            if (sec == -1) {
                timesUp ();
                $('#hideMsg').fadeOut('fast');
                clearInterval(timer);
            }
        }, 1000);


    }
    function startQuiz() {
        $("#quiz").show();
        startTimer();

        $("#splashScreen").hide();
    };
    $('#resetbtn').on("click", function () {
     
       $("#results").hide();
        $("#quiz").show();
        $(".correct").empty();
        $('.incorrect').empty();
        
        startTimer (60);

        

    });

});






