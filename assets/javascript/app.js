$(document).ready(function () {
    console.log("ready!");
    $("#quiz").hide();
    $("#startbtn").on("click", function () {
        startQuiz()
    });
    $("#submit").on("click", function () {

        checkAnswers();


    });
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    function results () {
        $("#quiz").hide();
        $("#splashScreen").hide();
        
    }
    function checkAnswers() {
        var radioValue = $("input[value='1']:checked").val();
        if (radioValue === 1) {
            correctAnswers++;
            console.log(correctAnswers);
        }
        else {
            incorrectAnswers++;
            console.log(incorrectAnswers);
        }

    };

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


});






