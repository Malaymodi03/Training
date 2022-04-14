$(document).ready(function(){

    $(".btnresume").hide();
    $(".btnrestart").hide();

    //start button
    //var time;
    var h = 0;
    var m = 0;
    var s = 0;
    var c = 0;

    $(".btnstart").click(function(){
    $('.btnstart').prop("disabled",true);
    $('.btnpause').prop("disabled",false);
    $('.btnstop').prop("disabled",false);

    $("#msg").text("Started");
    $(".logrow").show();

    // display();
    //$("#disphour").text(h);
    //$("#dispmin").text(m);
    //$("#dispsec").text(s);
    //$("#dispcsec").text(c);
    


    startTimer();

});


        //pause button
 $(".btnpause").click(function(){
    $('.btnpause').prop("disabled",true);
    $('.btnstop').prop("disabled",true);
    $(".btnstart").css({"display":"none"});
    $(".btnresume").show();
    $(".btnrestart").hide();
    $(".logrow").show();

            
    clearInterval(timer);

    $("#msgrow").css({"border":"1px solid DodgerBlue"})
    $("#msg").text("PAUSE AT: "+h+" HH, "+m+" MM, "+s+" SS, "+c+" CS.").css({"color":"DodgerBlue"});
    
    // display();
    //$("#disphour").text(h);
    //$("#dispmin").text(m);
    //$("#dispsec").text(s);
    //$("#dispcsec").text(c);
    if (h < 10){ 
        $("#disphour").text("0"+h);
    }

    if (m < 10){
        $("#dispmin").text("0"+m);
    }

    if (s < 10){
        $("#dispsec").text("0"+s);
    }

    if (c < 10) {
        $("#dispcsec").text("0"+c);    
    }
   // $(".logrow").append("PAUSE AT: "+h+" HH, "+m+" MM, "+s+" SS, "+c+" CS."+"<br>").css({"color":"Violet","text-align":"center"});
   $(".logrow").append(`PAUSE AT: ${h} HH, ${m} MM, ${s} SS, ${c} CS.<br>`).css({"color":"Violet","text-align":"center"});
   //$(this).show().prepend(`<p>STOPPED AT: ${h} HH, ${m}  MM, ${s} SS, ${c} C-SS <br></p>`);
});

//resume button
$(".btnresume").click(function(){
$('.btnstop').prop("disabled",false);
$("#msg").text("Resumed");
$(".btnresume").hide();
$(".btnstart").show();
$('.btnpause').prop("disabled",false);
$('.btnstart').prop("disabled",false);
$(".logrow").show();

    startTimer();

});

//stop button
$(".btnstop").click(function(){
$(".btnstart").css({"display":"none"});
$(".btnresume").css({"display":"none"});
$('.btnpause').prop("disabled",true);
$('.btnstop').prop("disabled",true);
$(".btnrestart").show();
$("#msg").text("Stopped");
$(".logrow").show();

clearInterval(timer);

$("#msg").text("STOPPED AT: "+h+" HH, "+m+" MM, "+s+" SS, "+c+" CS.").css({"color":"Tomato"});
// display();
//$("#disphour").text(h);
//$("#dispmin").text(m);
//$("#dispsec").text(s);
//$("#dispcsec").text(c);
prefix();
$(".logrow").append("STOP AT: "+h+" HH, "+m+" MM, "+s+" SS, "+c+" CS."+"<br>").css({"color":"Orange","text-align":"center"});
});

    
//restart button
$(".btnrestart").click(function(){
$('.btnstart').prop("disabled",true);
$('.btnpause').prop("disabled",false);
$('.btnstop').prop("disabled",false)
$(".btnrestart").hide();
$(".btnstart").show();
h=0, m=0, s=0, c=0;
startTimer();
});



 //reset button
$(".btnreset").click(function(){
$('.btnstart').prop("disabled",false);
$('.btnpause').prop("disabled",false);
$('.btnstop').prop("disabled",false);

$(".btnrestart").hide();
$(".btnresume").hide();
$(".btnstart").show();
$("#msg").text("Reset").css({"color":"black"});
$(".logrow").empty();
  h=0; m=0; s=0; c=0;

    clearInterval(timer);

    
// display();

// $("#disphour").text(h);
// $("#dispmin").text(m);
// $("#dispsec").text(s);
// $("#dispcsec").text(c);

prefix();
// if (h < 10){ 
//     $("#disphour").text("0"+h);
// }

// if (m < 10){
//     $("#dispmin").text("0"+m);
// }

// if (s < 10){
//     $("#dispsec").text("0"+s);
// }

// if (c < 10) {
//     $("#dispcsec").text("0"+c);    
// }

 console.log("h"+h);
 console.log("m"+m);
 console.log("s"+s);
 console.log("c"+c);
});

function display(){
    $("#disphour").text(h);
    $("#dispmin").text(m);
    $("#dispsec").text(s);
    $("#dispcsec").text(c);

}

function prefix(){
    
    //if((m < 10) ? $("#dispmin").text("0"+m) : m) ; 
    //if((s < 10) ? $("#dispsec").text("0"+s) : s);
    //if((c < 10) ? $("#dispcsec").text("0"+c) : c);
    $("#disphour").text((h < 10) ? "0"+h : h);
    $("#dispmin").text((m < 10) ? "0"+m : m);
    $("#dispsec").text((s < 10) ? "0"+s : s);
    $("#dispcsec").text((c < 10) ? "0"+c : c);
}

function startTimer(){
    timer = setInterval(function(){
        if(c < 99)
        {
            c++;
        }
        else
        {
            c = 0;
            if (s < 59)
            {
                s++;
            } 
            else 
            {
                s = 0;
                if(m < 59)
                {
                    m++;
                } 
                else 
                {
                    m = 0
                    if(h >= 24)
                    {
                        h=23; m=59; s=59; c=99;
                    }
                    else if(h<23)
                    {

                         h++;
                    }

                    else
                    {
                        h,m,s,c = 0;
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


    prefix();
    // if (h < 10){ 
    //     $("#disphour").text("0"+h);
    // }

    // if (m < 10){
    //     $("#dispmin").text("0"+m);
    // }

    // if (s < 10){
    //     $("#dispsec").text("0"+s);
    // }

    // if (c < 10) {
    //     $("#dispcsec").text("0"+c);    
    // }
            
    console.log("h"+h);
    console.log("m"+m);
    console.log("s"+s);
    console.log("c"+c);

    },10);
   }

   
});
 