$(document).ready(function(){
    $("p").hide();  // hide all p elements by default
    $("p").first().show(); //show first p element

    $(".btn").on('click',function(){
        var i = $(this).index(); 
        console.log("index is"+i);
        $(".tabcontent").eq(i).show();   // will show tabcontent having index as of button
        $(".tabcontent").not($(".tabcontent").eq(i)).hide(); //remaining will be hidden
    });
});
