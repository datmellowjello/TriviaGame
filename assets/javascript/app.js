$(document).ready(function () {
    console.log("ready!");
$("#quiz").hide();
$("#startbtn").on("click", function () {
    startQuiz ()
}); 

    function startTimer() {
        var sec = 60
        var timer = setInterval(function () {
            $('#timer').text(sec--);
            if (sec == -1) {
                $('#hideMsg').fadeOut('fast');
                clearInterval(timer);
            }
        }, 1000);

        
    };
    function startQuiz () {
        $("#quiz").show();
        startTimer();

        $("#splashScreen").hide();
    };


});






