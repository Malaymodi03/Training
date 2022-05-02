$(document).ready(function () {
    $('.btnresume').hide();

    var timer;
    $('.btnstart').click(function () {
        $('.btnstart').prop("disabled", true);
        $("#msg").text("Started");
        //for getting user input and converting into hours, minutes and seconds
        var inputValue = $('#num').val();
        var h, m, s, c = 0;
        h = Math.floor(inputValue / 3600);
        m = Math.floor((inputValue - (h * 3600)) / 60);
        s = Math.floor((inputValue - (h * 3600) - (m * 60)));
        c = 0;

        $("#disphour").text(h);
        $("#dispmin").text(m);
        $("#dispsec").text(s);
        $("#dispcsec").text(c);


        startTimer();

        //reset button
        $(".btnreset").click(function () {
            $('.btnstart').prop("disabled", false);
            $("#msg").text("Reset");

            h = 0;
            m = 0;
            s = 0;
            c = 0;
            clearInterval(timer);
            $("num").val("");
            $("#disphour").text(h);
            $("#dispmin").text(m);
            $("#dispsec").text(s);
            $("#dispcsec").text(c);

            console.log("h" + h);
            console.log("m" + m);
            console.log("s" + s);
            console.log("c" + c);

        });

        //pause button
        $(".btnpause").click(function () {
            $('.btnstart').prop("disabled", false);

            //$('.btnstart').text("Resume");
            $('.btnstart').css({ "display": "none" })
            $('.btnresume').show();
            //$('.btnstart').hide();
            $("#msg").text("Paused");

            //$('.btnstart').hide();

            clearInterval(timer);
            return;
            value();

        });

        //resume button 
        $('.btnresume').click(function () {
            //$('.btnstart').show();
            // $('.btnresume').hide();
            $("#msg").text("Resumed");
            startTimer();
        });


        //stop button     
        $(".btnstop").click(function () {
            $('.btnstart').prop("disabled", false);
            $(".btnstart").text("Restart");
            $("#msg").text("Stopped");

            h, m, s, c = 0;
            clearInterval(timer);
            return;
            value();
        });

        //restart functionality
        $(".btnstart").click(function () {
            $('.btnstart').prop("disabled", false);
            $(".btnstart").text("Start");
        });

        //function to be used inside start and resume button
        function startTimer() {

            timer = setInterval(function () {
                if (c > 0) {
                    c--;
                } else {
                    c = 99;
                    if (s > 0) {
                        s--;
                    } else {
                        s = 59;
                        if (m > 0) {
                            m--;
                        } else {
                            m = 59
                            if (h > 0) {
                                h--;
                            } else {
                                h, m, s, c = 0;
                                clearInterval(timer);
                                return;
                            }
                        }
                    }
                }

                $("#disphour").text(h);
                $("#dispmin").text(m);
                $("#dispsec").text(s);
                $("#dispcsec").text(c);


            }, 10);
        };

        function value() {
            $("num").val(" ");

            $("#disphour").text(h);
            $("#dispmin").text(m);
            $("#dispsec").text(s);
            $("#dispcsec").text(c);

            console.log("h" + h);
            console.log("m" + m);
            console.log("s" + s);
            console.log("c" + c);
        }

        console.log(inputValue, h, m, s, c);
    });
});