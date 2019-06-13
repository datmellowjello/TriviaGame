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

        var radioValue = $("input[value='0']:checked").val();
        if (radioValue === 1) {
            correctAnswers++;

            console.log(correctAnswers);
        }
        if (radioValue === 0) {
            correctAnswers++;

            console.log(correctAnswers);
        }

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


});






