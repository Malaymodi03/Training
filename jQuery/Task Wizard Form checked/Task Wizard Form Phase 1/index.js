$(document).ready(function(){

    $(".btnsteps").eq(0).css("background-color","royalblue");

     //implementation of datepicker plugin
     $(function(){
         $("#dob").datepicker({  maxDate: 0 });
     });

     //input mask for ipadd
     $('#ipadd').mask('0ZZ.0ZZ.0ZZ.0ZZ', { translation: { 'Z': { pattern: /[0-9]/, 
     optional: true } } });
          
     
     //implementation of masking plugin
    $('#cno').mask('00000-00000');
    $("#dob").mask('00/00/0000');
    $('#hour').mask('00:00:00');
    $('#zipcode').mask('000-000');
  //  $('#ipadd').mask('000.000.0.00');
    $('#money').mask('#,##0,00',{reverse:true});


    $('.formtab').hide().first().show();
    $('.btnupdate, .btncancel').hide();


    //steps button
    $(".btnsteps").click(function(){
        var f = $(this).index();

        $(".formtab").eq(f).show();
        $(".formtab").not($(".formtab").eq(f)).hide();
        $(".btnsteps").eq(f).css("background-color","royalblue");
        $(".btnsteps").not($(".btnsteps").eq(f)).css("background-color","");
});

    //global variables
    var i,p,current_row,index,errorind,ed;

    //save and next button
    $('.btnnext').click(function(){
         i = $(this).parent().index();
         console.log(i);
        $('.formtab').eq(i+1).show();
        $('.formtab').not($(".formtab").eq(i+1)).hide();
        //$('.btnnext').eq(i).hide();
        $('.btnnext').eq(i+1).show();
        $(".btnsteps").eq(i+1).css("background-color","RoyalBlue");
        $(".btnsteps").not($(".btnsteps").eq(i+1)).css("background-color","");
});

    //previous button
    $('.btnprevious').click(function(){
        p = $('.btnprevious').index(this);
        console.log(p);
        console.log(i);
        console.log(p-i);

        $('.formtab').hide().eq(p).show();
        $('.btnnext').eq(i).show();
        $(".btnsteps").eq(p).css("background-color","RoyalBlue");
        $(".btnsteps").not($(".btnsteps").eq(p)).css("background-color","");
 });

//method for only alphabets
 jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
  }, "Letters only please"); 


//ip adress validation
  $.validator.addMethod('IP4Checker', function(value) {
    var ip = /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/; 
    return value.match(ip);
    }, 'Invalid IP address');

//jquery validation plugin
 $('#myform').validate({
   errorClass: "error fail-alert",
    ignore:[],
    rules: {
        fname : {
            lettersonly:true,
            required: true,
            minlength: 2
            },

        lname : {
            lettersonly:true,
            required: true,
            minlength: 2
            //equalTo: "fname" // 'name' of other field
                },

        gendervalue : {
            required: true
        },

        email : {
            required: true,
            minlength: 1,
            email:true
            //equalTo: "fname" // 'name' of other field
                },

        cno : {
            required: true,
            minlength: 10

            //equalTo: "fname" // 'name' of other field
                }, 

        dob : {
               required: true,
               minlength: 1
        
             //equalTo: "fname" // 'name' of other field
                }, 
                
                
        sports :{
            required: true,
            minlength: 1
        },


        about : {
                required: true,
                minlength: 1
                },
                
        hours : { 
                required: true,
                range: [0, 24]
                },     

        zipcode : { 
            required: true,
            minlength: 6
            },
  
        ipadd : { 
                IP4Checker: true,
                required: true,
                minlength: 1
               },   
               
        money : { 
                required: true,
                minlength: 1
        }  ,
        
    },

    messages: {

        firstname:{
            required: "Enter your first name",
            minlength:"Enter at least (2) characters",
            lettersonly:"Please enter alphabets only"
        },
        
        lastname:{
            required: "Enter your last name",
            minlength:"Enter at least (2) characters",
            lettersonly:"Please enter alphabets only"
        },

        gendervalue : 'Please fill gender',
        email: 'Please enter valid email',
        cno: 'Please provide contact details',
        dob: 'Please select your date of birth',
        sports : 'PLease select your sports',
        about: 'Please say about yourself',
        hours : 'Please Enter Hours between 0 to 24',
        zipcode : 'Please enter zipcode',

        lastname:{
            required: "Enter your last name",
            minlength:"Enter at least (2) characters",
            IP4Checker:"Invalid ip address"
        },

        money : 'Please enter money',    
    },

    submitHandler: function(form) {
         // form.submit();
        alert("form submitted")
      }
});

   //submit button
   $(".btnsubmit").click(function(e){
    e.preventDefault();
   
    if ($('#myform').valid()) {
        alert("form is valid");
    
      $('.formtab').hide().eq(0).show();
    var tandc;

       var fname = $("#fname").val();
       var lname = $("#lname").val();
       var gender = $('form input[id=radiogender]').is('input:checked')?"Male":"Female";
       var email = $("#email").val();
       var cno = $("#cno").val();
       var dob = $("#dob").val();
       var sports = $("#sports").val();
       var about = $("#about").val();
       var hours = $("#hours").val();
       var zipcode = $("#zipcode").val();
       var ipadd = $("#ipadd").val();
       var money = $("#money").val();
       index = $("#displaytable tr").length;
       console.log("tr lenghth is"+index);

       fname_edit = fname;
       lname_edit = lname;
       gender_edit = gender;
       email_edit = email;
       cno_edit = cno;
       dob_edit = dob;
       sports_edit = sports;
       about_edit = about;
       hours_edit = hours;
       zipcode_edit = zipcode;
       ipadd_edit = ipadd;
       money_edit = money;

       tandc = $('.checkbox').is("input:checked")? "Agree" : "Disagree";

       //appending values to the table
       $("#displaytable").append(`<tr class="displayrow">
       <td>${index}</td> 
       <td>${fname}</td> 
       <td>${lname}</td> 
       <td>${gender}</td> 
       <td>${email}</td> 
       <td>${cno}</td> 
       <td>${dob}</td> 
       <td>${sports}</td> 
       <td>${about}</td> 
       <td>${hours}</td> 
       <td>${zipcode}</td> 
       <td>${ipadd}</td> 
       <td>${money}</td> 
       <td>${tandc}</td> 
       <td><button type="button" class="btnedit">Edit</button></td> 
       <td><button type="button" class="btndelete">Delete</button></td></tr>`);   

         //clearing the form fields
         $('input[type="text"],input[type="tel"],input[type="email"],input[type="number"],input[type="radio"],input[type="checkbox"],input[type="date"],textarea').val("");
         $('input[type="radio"]:checked').prop("checked",false);
         $('input[type="checkbox"]').prop("checked",false);
         $('#sports').val("");

         var s = $(this).index();
         $(".btnsteps").eq(s).css("background-color","royalblue");
         $(".btnsteps").not($(".btnsteps").eq(s)).css("background-color","");
}
    else {

        // console.log("inside else");
        errorind = $("input.error").first().parent().index();
        console.log(errorind);
        $(".btnsteps").eq(errorind).css("background-color","royalblue");
        $(".btnsteps").not($(".btnsteps").eq(errorind)).css("background-color","");

        $(".formtab").not($(".formtab").eq(errorind).show()).hide();
        console.log(fname);
        $("#fname").val();
        $("#lname").val();
        $("input[name='gendervalue']:checked").val();
        $("#email").val();
        $("#cno").val();
        $("#dob").val();
        $("#sports").val();
        $("#about").val();
        $("#hours").val();
        $("#zipcode").val();
        $("#ipadd").val();
        $("#money").val();

        alert("form is invalid");
    }
});
    //delete button
    $(document).on("click", ".btndelete", function(){    
       if(confirm("Are you sure you want to delete this?")){
            $(this).parents("tr").remove();          
            //var d  = $(this).closest('tr').index();        
            //$('.displayrow').eq(d).remove();
            $( "table tbody tr" ).each(function(d){
                
                     $($(this).find("td")[0]).html(d+1);
                     console.log(d);
            });
        }
        else{
            return false;
        }
    });
    //edit button
    $(document).on("click",".btnedit",function(){
       ed  = $(this).closest('tr').index(); 
       $('.btndelete').prop("disabled",false);
       $('.btndelete').eq(ed).prop("disabled",true);
      // $('.btndelete').not(eq(ed)).prop("disabled",false);
       // $('.btndelete').prop("disabled",true);
        $('.btnsubmit').hide();
        $('.btnupdate').show();
        $('.btncancel').show();
     console.log("edit"); 
       current_row = $(this).parents("tr");
       console.log(current_row); 
       var edit_fname = current_row.find("td").eq(1).text();
       var edit_lname = current_row.find("td").eq(2).text();
       var edit_gender = current_row.find("td").eq(3).text();
       var edit_email = current_row.find("td").eq(4).text();
       var edit_cno = current_row.find("td").eq(5).text();
       var edit_dob = current_row.find("td").eq(6).text();
       var edit_sports = current_row.find("td").eq(7).text();
       var edit_about = current_row.find("td").eq(8).text();
       var edit_hours = current_row.find("td").eq(9).text();
       var edit_zipcode = current_row.find("td").eq(10).text();
       var edit_ipadd = current_row.find("td").eq(11).text();
       var edit_money = current_row.find("td").eq(12).text();
       var edit_tandc = current_row.find("td").eq(13).text();
       console.log(edit_gender);
       $("#fname").val(edit_fname);
       $("#lname").val(edit_lname);
       (edit_gender == "Male") ? $("#radiogender").prop("checked", true) : $("#radiogender2").prop("checked", true);
       $("#email").val(edit_email);
       $("#cno").val(edit_cno);
       $("#dob").val(edit_dob);
       $("#sports").val(edit_sports);
       $("#about").val(edit_about);
       $("#hours").val(edit_hours);
       $("#zipcode").val(edit_zipcode);
       $("#ipadd").val(edit_ipadd);
       $("#money").val(edit_money);
      (edit_tandc=="Agree") ? $("#tandc").prop("checked",true):$("#tandc").prop("checked",false);
})
    //update button
    $('.btnupdate').click(function(){
        if ($('#myform').valid()) {
            alert("form updated");
 
        //getting the updated form values   
        var index =  current_row.find("td").eq(0).text();
        var fname_update = $("#fname").val();
        var lname_upadte = $("#lname").val();
        //var gender_update = $("input[name='gendervalue']:checked").val();
        var gender_update  = $('form input[id=radiogender]').is('input:checked')?"Male":"Female";
        var email_update = $("#email").val();
        var cno_update = $("#cno").val();
        var dob_update = $("#dob").val();
        var sports_update = $("#sports").val();
        var about_update = $("#about").val();
        var hours_update = $("#hours").val();
        var zipcode_update = $("#zipcode").val();
        var ip_update = $("#ipadd").val();
        var money_update = $("#money").val();
        tandc = $('.checkbox').is("input:checked")? "Agree" : "Disagree";
        console.log(fname_update);
        var upi = $("tr").length;
        console.log(upi);

        //setting the updated form values
      console.log(gender_update);
        var update_data = `<tr class = "displayrow">
                           <td>${index}</td>
                           <td>${fname_update}</td>
                           <td>${lname_upadte}</td>
                           <td> ${gender_update} </td> 
                           <td>${email_update}</td> 
                           <td>${cno_update}</td> 
                           <td>${dob_update}</td> 
                           <td>${sports_update}</td> 
                           <td>${about_update}</td> 
                           <td>${hours_update}</td>
                           <td>${zipcode_update}</td>
                           <td>${ip_update}</td>
                           <td>${money_update}</td>    
                           <td>${tandc}</td> 
                           <td><button type="button" class="btnedit">Edit</button></td> 
                           <td><button type="button" class="btndelete">Delete</button></td>
                           </tr>`;


        console.log("new gender");
        $("#displaytable").find(current_row).replaceWith(update_data);

        $('input[type="text"],input[type="email"],input[type="number"],input[type="radio"],input[type="checkbox"],input[type="date"],textarea').val("");
        $('input[type="radio"]:checked').prop("checked",false);
        $('input[type="checkbox"]').prop("checked",false);
        $('#sports').val("");
         $('.btnupdate').hide();
         $('.btncancel').hide();
         $('.btnsubmit').show();
        console.log(update_data);
        }
        else{
            errorind = $("input.error").first().parent().index();
            console.log(errorind);
            $(".formtab").not($(".formtab").eq(errorind).show()).hide();
            $(".btnsteps").eq(errorind).css("background-color","royalblue");
            $(".btnsteps").not($(".btnsteps").eq(errorind)).css("background-color","");
        
       
        }
    });
       //cancel button 
        $('.btncancel').click(function(){
            $('.btndelete').eq(ed).prop("disabled",false);
            $(".btnsteps").eq(errorind).css("background-color","royalblue");
            $(".btnsteps").not($(".btnsteps").eq(errorind)).css("background-color","");
        console.log("cancel button is clicked")
       $('input[type="text"],input[type="email"],input[type="number"],textarea,input[type="date"],input[type="checkbox"]').val("");
       $('input[name="gendervalue"]').prop('checked', false);
       $('input[name="sport"]').prop('checked', false);
       $('input[name="checkb"]').prop('checked', false);
       $('.checkbox').prop('checked',false);
       $('#sports').val();
       $('.btnupdate').hide();
       $('.btncancel').hide();
       $('.btnsubmit').show();
       $('.formtab').hide().eq(0).show();
    });
});