$(document).ready(function () {
    var value = "";  //global variable here all value of the input field is stored.
    $('.btnc').click(function () {
        value += $(this).text();
        $("#userinput").val(value);       
    });

    //-------------------------------------------keyboard binding--------------------------------

    // $("#userinput").mousedown(function(m){
    //     alert("clicked")
    //     const inp = document.querySelector('#userinput');

    //            inp.addEventListener('click', c => {
        
    //             var a = value;
    //             var b = $(c.target.selectionStart).text();
    //     var position = c.target.selectionStart;
    //     console.log(position);
    //     var output = [a.slice(0, position), b, a.slice(position)].join('');
    //           console.log(output);
    //            });
        
    // });
    $(document).keypress(function (e) {
        e.preventDefault();
    });

    $(document).keydown(function (event) {
        if (event.shiftKey && event.keyCode === 57) {
            value += "(";
            $("#userinput").val(value);
        }
        else if (event.shiftKey && event.keyCode === 187 || event.keyCode === 107) {
            value += "+";
            $("#userinput").val(value);
        }

        else if (event.shiftKey && event.keyCode === 189 || event.keyCode === 109) {
            value += "-";
            $("#userinput").val(value);
        }

        else if (event.shiftKey && event.keyCode === 48) {
            value += ")";
            $("#userinput").val(value);
        }
        else if (event.shiftKey && event.keyCode === 56 || event.keyCode === 106) {
            value += "x";
            $("#userinput").val(value);
        }
        else if (event.shiftKey && event.keyCode === 191 || event.keyCode === 111) {
            value += "/";
            $("#userinput").val(value);
        }
        else if (event.shiftKey && event.keyCode === 54) {
            value += "^";
            $("#userinput").val(value);
        }
        // for digit keys 0 to 9
        else if ((event.keyCode >= 48 && event.keyCode <= 57)) {
            value += String.fromCharCode(event.keyCode)
            $("#userinput").val(value);
        }
        //for numpad keys 0 to 9
        else if ((event.keyCode >= 96 && event.keyCode <= 105)) {
            value += String.fromCharCode(event.keyCode - 48)
            $("#userinput").val(value);
        }
        else if (event.keyCode === 110 || event.keyCode === 190) {
            value += ".";
            $("#userinput").val(value);
        }
        // equal button
        else if (event.keyCode === 187 || event.keyCode === 13) {

            calculate();
        }
        //backspace button
        else if (event.keyCode === 8) {
            backspace();
        }
        //escape button
        else if (event.keyCode === 27) {
            clear();
        }
    });
    //--------------------------------------- backspace button--------------------------------
    $('#backspace').click(function () {
        console.log("hello");
        backspace();   
    });

    //----------------------------------------equal button--------------------------------------
    $('#equal').click(function () {
        calculate();
    });

    //----------------------------------------clear button-------------------------------------
    $('#clear').click(function () {
           clear();
    });
    //----------------------------------------calculation function-------------------------------
    function calculate() {
        try {
            var new_value = $("#userinput").val();
            new_value = new_value.replace(/x/g, "*");
            new_value = new_value.replace(/÷/g, "/");
            new_value = new_value.replace(/√/g, "**0.5");
            new_value = new_value.replace(/²/g, "**2");
            new_value = new_value.replace(/^0+/, '');
            console.log(new_value);
            for (i = 0; i < new_value.length - 1; i++) {
                if (new_value.charAt(i) == "/" && new_value.charAt(i + 1) == "/") {
                    throw "Malformed Expression";
                }
            }
            var ans = eval(new_value);
            $("#userinput").val(value);

            if (ans == "Infinity") {
                throw "Division by zero is undefined";
            }
            $("#userinput").val(ans);
            console.log(ans);
            value = ans;
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                $("#userinput").val("Malformed Expression")
            }
            else if (e instanceof ReferenceError) {
                $("#userinput").val("Malformed Expression")
            }
            else if (e instanceof TypeError) {
                $("#userinput").val("Malformed Expression")
            }
            else {
                $("#userinput").val(e);
            }
        }
    }
    //------------------------------------backspace function------------------------------------
    function backspace(){
        
       // var string_position = document.getElementById("userinput").selectionStart;
    //    var inp = document.querySelector('#userinput');

    //    inp.addEventListener('click', c => {
    //    var position = c.target.selectionStart;
    //    var subvalue1 = value.substring(0,position);
    //    var subvalue2 = value.substring(position,value.length)
    //   // var subvalue3 = subvalue1+"+"+subvalue2;
    //    console.log("subvalue1",subvalue1);
    //    console.log("subvalue2",subvalue2);
    //    console.log("subvalue3",subvalue3);
    //    console.log(position);    
    //    //value=subvalue3;
    //    value = $("#userinput").val().substring(0, $("#userinput").val().length - 1);
    //    console.log("value",value);
    //   });       
         value = $("#userinput").val().substring(0, $("#userinput").val().length - 1);
         $("#userinput").val(value);

        
        
    }
    //------------------------------------clear function-----------------------------------------
    function clear(){
        value = "";
        $("#userinput").val("");
    }
});