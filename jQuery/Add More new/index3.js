$(document).ready(function(){

    var title,subtitle,value;
    $('.btnaddmore').click(function(){
        $('.secondrow').append(`<div class="parentrow">
        <input type="text" class="form-control" id="title" placeholder="Title"> 
        <button type="button" class="btnaddchild">Add Child</button>
        <button type="button" class="btnsubmit">Submit</button> 
        <button type="button" class="btndelete">Delete</button></div>`);

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
        
        var plen = $('.parentrow').length;
        // alert(plen);
        var child_length = $(this).siblings('.childrow').length;
        //alert(child_length);
        var titleindex = $(this).siblings().index();
        var subtitleindex = $(this).siblings().find("#subtitle").index();
        var valueindex = $(this).siblings().find("#value").index();
        var deleteindex = $(this).siblings().find(".btndelete").index();
        console.log("titleindex",titleindex);
        console.log("subtitleindex",subtitleindex);
        console.log("valueindex",valueindex);
        console.log("deleteindex",deleteindex);

       // subtitle="";
       // value="";
       $('table tbody').empty()
       title = $(this).siblings("#title").eq(titleindex).val();
     //  alert(title)
     $('table tbody').append(`<tr><td colspan="2">${title}</td></tr>`)
    
        for(i=0; i<child_length; i++)
        {
            subtitle = $(this).siblings().find("#subtitle").eq(i).val();
            value = $(this).siblings().find("#value").eq(i).val();
            $('table tbody').append(`<tr><td>${subtitle}</td><td>${value}</td></tr>`)
        }

        
        
       // title = $(this).siblings("#title").eq(titleindex).val();
        //subtitle = $(this).siblings().find("#subtitle").eq(subtitleindex).val();
        //value = $(this).siblings().find("#value").eq(valueindex).val();
        //$('table tbody').append(`<tr><td>${title}</td></tr><tr><td>${subtitle}</td><td>${value}</td>`)
    });

    $(document).on("click", ".btndelete", function(){
        var delindex = $(this).index();
        $('.parentrow').eq(delindex).remove();
        
    });

});