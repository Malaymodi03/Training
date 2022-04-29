$(document).ready(function(){

    var title,subtitle,value;
    $('.btnaddmore').click(function(){
        $('.secondrow').append(`<div class="parentrow">
        <input type="text" class="form-control" id="title" placeholder="Title"> 
        <button type="button" class="btnaddchild">Add Child</button>
        <button type="button" class="btnsubmit">Submit</button> 
        <button type="button" class="btndelete">Delete</button></div>`);

         $('.displaydatarow').append(`<table class="table table_data">
         
       </table>`);

    });

    $(document).on("click", ".btnaddchild", function(){  
        var index = $(this).parent().index();
        $('.parentrow').eq(index).append(`<div class="childrow">
        <input type="text" class="form-control" id="subtitle" placeholder="Subtitle">
        <input type="text" class="form-control" id="value" placeholder="Value"> 
        <button type="button" class="btndelete">Delete</button>
        <div>`)
    });

    //submit button
    $(document).on("click", ".btnsubmit", function(){ 

         var table_length = $(this).parents('.secondrow').siblings('.displaydatarow').children('.table_data').length;
        
         var parentrow_index = $(this).parent().index();
         console.log(table_length,parentrow_index);
        // var titleindex = $(this).siblings().index();
        // var subtitleindex = $(this).siblings().find("#subtitle").index();
        // var valueindex = $(this).siblings().find("#value").index();
       //  title = $(this).siblings("#title").eq(titleindex).val();
       // $('.displaydatarow').append(`<tr><td>${title}</td></tr>`)
        var titleindex = $(this).siblings().index();
        var subtitleindex = $(this).siblings().find("#subtitle").index();
        var valueindex = $(this).siblings().find("#value").index();
        var deleteindex = $(this).siblings().find(".btndelete").index();
        console.log("titleindex",titleindex);
        console.log("subtitleindex",subtitleindex);
        console.log("valueindex",valueindex);
        console.log("deleteindex",deleteindex);

       


         for(t=0; t<table_length; t++)
         {
             if(t==parentrow_index+1)
             {
                  title = $(this).siblings("#title").eq(titleindex).val();
                  $('.table_data').append(`<tr><td>${title}</td></tr>`)
             }

             
            // if(t==parentrow_index)
            // { 
            //     console.log("inside for loop if")
            //     subtitle = $(this).siblings().find("#subtitle").eq(subtitleindex).val();
            //     value = $(this).siblings().find('#value').eq(valueindex).val();
            //     $('table tbody').eq(t).append(`<tr><td>${subtitle}</td><td>${value}</td></tr>`)

            // }
        }

        var plen = $('.parentrow').length;
        // alert(plen);
        var child_length = $(this).siblings('.childrow').length;
        //alert(child_length);
       
       
      // title = $(this).siblings("#title").eq(titleindex).val();
       //$('table tbody').append(`<tr><td colspan="2">${title}</td></tr>`)
    //    subtitle = $(this).siblings().find("#subtitle").eq(subtitleindex).val();
    //    value = $(this).siblings().children('#value').eq(valueindex).val();
    //    $('table tbody').append(`<tr><td>${subtitle}</td><td>${value}</td></tr>`)
 

                 

    });

    $(document).on("click", ".btndelete", function(){
        var delindex = $(this).index();
        $('.parentrow').eq(delindex).remove();
        
    });

});