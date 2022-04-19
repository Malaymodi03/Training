$(document).ready(function(){
    $('.formtab').hide().first().show();
    $('.btnupdate').hide();
    $('.btncancel').hide();
    
    $(".btnsteps").click(function(){
        var f = $(this).index();

        $(".formtab").eq(f).show();
        $(".formtab").not($(".formtab").eq(f)).hide();
});
    var i,p;
    var current_row;
    var index;
    //save and next button
    $('.btnnext').click(function(){
         i = $(this).index();
        $('.formtab').eq(i+1).show();
        $('.formtab').not($(".formtab").eq(i+1)).hide();
        //$('.btnnext').eq(i).hide();
        $('.btnnext').eq(i+1).show();
});
    //previous button
    $('.btnprevious').click(function(){
        p = $('.btnprevious').index(this);
        console.log(p);
        console.log(i);
        console.log(p-i);

        $('.formtab').hide().eq(p).show();
        $('.btnnext').eq(i).show();
 });
   //submit button
   $(".btnsubmit").click(function(){
    $('.formtab').hide().eq(0).show();
    var tandc;

       var fname = $("#fname").val();
       var lname = $("#lname").val();
       var gender = $("input[name='gendervalue']:checked").val();
       var email = $("#email").val();
       var cno = $("#cno").val();
       var dob = $("#dob").val();
       var sports = $("#sports").val();
       var about = $("#about").val();
       index = $("tr").length;

       fname_edit = fname;
       lname_edit = lname;
       gender_edit = gender;
       email_edit = email;
       cno_edit = cno;
       dob_edit = dob;
       sports_edit = sports;
       about_edit = about;

       tandc = $('.checkbox').is("input:checked")? "Agree" : "Disagree";

       $( "input[type=checkbox]" ).on( "click", function(){
        if($(this).is(":checked")){
            tandc = "Agree";
        }
        else if($(this).is(":not(:checked)")){
            tandc = "Disagree";
        }
    });

       //appending values to the table
       $("#displaytable").append(`<tr class="displayrow"><td>${index}</td> <td>${fname}</td> <td>${lname}</td> <td>${gender}</td> <td>${email}</td> <td>${cno}</td> <td>${dob}</td> <td>${sports}</td> <td>${about}</td> <td>${tandc}</td> <td><button type="button" class="btnedit">Edit</button></td> <td><button type="button" class="btndelete">Delete</button></td></tr>`);     
       //clearing the form fields
       $('input[type="text"],input[type="email"],input[type="number"],input[type="radio"],input[type="checkbox"],input[type="date"],textarea').val("");
       $('input[type="radio"]:checked').prop("checked",false);
       $('input[type="checkbox"]').prop("checked",false);
       $('#sports').val("");
       
});
    //delete button
    $(document).on("click", ".btndelete", function(){              
        var d  = $(this).closest('tr').index();        
        $('.displayrow').eq(d).remove();
    });
    //edit button
    $(document).on("click",".btnedit",function(){
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
       var edit_tandc = current_row.find("td").eq(9).text();
       console.log(edit_gender);
       $("#fname").val(edit_fname);
       $("#lname").val(edit_lname);
       (edit_gender == "Male") ? $("#radiogender").prop("checked", true) : $("#radiogender2").prop("checked", true);
       $("#email").val(edit_email);
       $("#cno").val(edit_cno);
       $("#dob").val(edit_dob);
       $("#sports").val(edit_sports);
       $("#about").val(edit_about);
      (edit_tandc=="Agree") ? $("#tandc").prop("checked",true):$("#tandc").prop("checked",false);
})
    //update button
    $('.btnupdate').click(function(){
 
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
                           <td>${tandc}</td> 
                           <td><button type="button" class="btnedit">Edit</button></td> 
                           <td><button type="button" class="btndelete">Delete</button></td>
                           </tr>`;
        console.log("new gender");
        $("#displaytable").find(current_row).replaceWith(update_data);
        console.log(update_data);
        $('input[type="text"],input[type="email"],input[type="number"],input[type="radio"],input[type="checkbox"],input[type="date"],textarea').val("");
       $('input[type="radio"]:checked').prop("checked",false);
       $('input[type="checkbox"]').prop("checked",false);
       $('#sports').val("");
        $('.btnupdate').hide();
        $('.btncancel').hide();
        $('.btnsubmit').show();
    });
       //cancel button 
        $('.btncancel').click(function(){
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