$(document).ready(function(){
    var value="";  //global variable here all value of the input field is stored.
    $('.btnc').click(function(){
        value += $(this).text();
        $("#userinput").val(value); 
//         const inp = document.querySelector('#userinput');

//        inp.addEventListener('click', e => {

//         var a = value;
//         var b = $(e.target.selectionStart).text();
// var position = e.target.selectionStart;
// console.log(position);
// var output = [a.slice(0, position), b, a.slice(position)].join('');
//       console.log(output);

//});
         
    });

  //-------------------------------------------keyboard binding--------------------------------
  
  $( document ).keypress(function(e){
      e.preventDefault();
  });

  $( document ).keydown(function(event) {
    //event.preventDefault();
    //console.log(event.keyCode,"key press", event.shiftKey, event.keyCode == 48);
    if(event.shiftKey && event.keyCode === 57){
        value+= "(";
        $("#userinput").val(value);
    }
    else if(event.shiftKey && event.keyCode === 187 || event.keyCode === 107){
        value+= "+";
        $("#userinput").val(value);
    }

    else if(event.shiftKey && event.keyCode === 189 || event.keyCode === 109){
        value+= "-";
        $("#userinput").val(value);
    }

    else if(event.shiftKey && event.keyCode === 48){
        value+= ")";
        $("#userinput").val(value);
    }
    else if(event.shiftKey && event.keyCode === 56 || event.keyCode === 106){
        value+= "x";
        $("#userinput").val(value);
    }
    else if(event.shiftKey && event.keyCode === 191 || event.keyCode === 111){
        value+= "/";
        $("#userinput").val(value);
    }
    else if(event.shiftKey && event.keyCode === 54){
        value+= "^";
        $("#userinput").val(value);
    }
    
    else if(event.keyCode === 48 || event.keyCode === 96){
        console.log("Inside");
        value+= "0";
        $("#userinput").val(value);
    }
    else if(event.keyCode === 49 || event.keyCode === 97){
        value+= "1";
        $("#userinput").val(value);
    }
    else if(event.keyCode === 50 || event.keyCode === 98){
        value+= "2";
        $("#userinput").val(value);
    }
    else if(event.keyCode === 51 || event.keyCode === 99){
        value+= "3";
        $("#userinput").val(value);
    }
    else if(event.keyCode === 52 || event.keyCode === 100){
        value+= "4";
        $("#userinput").val(value);
    }
    else if(event.keyCode === 53 || event.keyCode === 101){
        value+= "5";
        $("#userinput").val(value);
    }

    else if(event.keyCode === 54 || event.keyCode === 102){
        value+= "6";
        $("#userinput").val(value);
    }

    else if(event.keyCode === 55 || event.keyCode === 103){
        value+= "7";
        $("#userinput").val(value);
    }

    else if(event.keyCode === 56 || event.keyCode === 104){
        value+= "8";
        $("#userinput").val(value);
    }

    else if(event.keyCode === 57 || event.keyCode === 105){
        value+= "9";
        $("#userinput").val(value);
    }
    
    // else if((event.keyCode >= 48 && event.keyCode <= 57)){
    //        value+= value.fromCharCodeAt(event.keyCode)
    //          $("#userinput").val(value);
    //  }

    else if(event.keyCode === 110 || event.keyCode === 190){
        value+= ".";
        $("#userinput").val(value);
    }

    else if(event.keyCode === 187 || event.keyCode === 13 ){
        
        calculate();
    }
    else if(event.keyCode === 8){
        value=$("#userinput").val().substring(0,$("#userinput").val().length-1);
    //$("#userinput").val(value);       
    $("#userinput").val(value);
    }

    else if(event.keyCode === 27){
        value="";
        $("#userinput").val("");     
    }
    // else{
    //     $(document).off('keydown');
    // }
});
   //-----------------------------------------backspace button--------------------------------
   $('#backspace').click(function(){
    console.log("backspace clicked");
    value=$("#userinput").val().substring(0,$("#userinput").val().length-1);
    //$("#userinput").val(value);       
    $("#userinput").val(value);
    console.log(value);
});

  //-------------------------------------------equal button--------------------------------------
   $('#equal').click(function(){
       calculate();
});

   //-----------------------------------------clear button-------------------------------------
   $('#clear').click(function(){
       value="";
       $("#userinput").val("");     
   });

   //----------------------------------------calculation function-------------------------------
   function calculate(){
    try{
        var new_value = $("#userinput").val();
        new_value = new_value.replace(/x/g,"*");
        new_value = new_value.replace(/÷/g,"/");
        new_value = new_value.replace(/√/g,"**0.5");
        new_value = new_value.replace(/²/g,"**2");
        new_value = new_value.replace(/^0+/, '');
        console.log(new_value);  
        for(i=0; i<new_value.length-1; i++)
        {
            if(new_value.charAt(i)=="/" && new_value.charAt(i+1) =="/")
            {
                throw "Malformed Expression";
            }
        }
    var ans = eval(new_value);
    $("#userinput").val(value);
    
    if(ans=="Infinity")
    {
        throw "Division by zero is undefined";
    }
    $("#userinput").val(ans);
    console.log(ans);
    value=ans;
    }
    catch(e){
        if(e instanceof SyntaxError)
        {
            $("#userinput").val("Malformed Expression")
        }
        else if(e instanceof ReferenceError)
        {
            $("#userinput").val("Malformed Expression")
        }
        else if(e instanceof TypeError)
        {
            $("#userinput").val("Malformed Expression")
        }
        else
        {
             $("#userinput").val(e);
        }
    }
  }
});