$(document).ready(function(){

    var title,subtitle,value;
    $('.btnaddmore').click(function(){

        // bootbox.confirm("Do you want to add?", function(result){

        //     if(result==true)
        //     {
        //         $('.secondrow').append(`<div class="parentrow">
        //         <input type="text" class="form-control" id="title" placeholder="Title"> 
        //         <button type="button" class="btnaddchild">Add Child</button>
        //         <button type="button" class="btnsubmit">Submit</button> 
        //         <button type="button" class="btndelete">Delete</button></div>`);
        //     }
            
            
        // })
        
        //         $('.displaydatarow').append(`<table class="table table_data">
        //          <tbody>
        //          </tbody>
        //       </table>`);

        bootbox.confirm({ 
            message: "Are you sure you want to add more rows?",
            button:{
                confirm:{
                    label: "OK",
                    class: 'btn-success',
                },
                cancel:
                {
                    className: 'btn-danger',
                }
            },
            callback: function(result){ 
                /* result is a boolean; true = OK, false = Cancel*/
            if(result==true)
            {
                $('.secondrow').append(`<div class="parentrow">
                         <input type="text" class="form-control" id="title" placeholder="Title"> 
                         <button type="button" class="btnaddchild">Add Child</button>
                         <button type="button" class="btnsubmit">Submit</button> 
                      <button type="button" class="btndelete">Delete</button></div>`);
            }
         }
        })

        $('.displaydatarow').append(`<table class="table table_data">
                  <tbody>
                  </tbody>
              </table>`);

            
    
      

    });

    $(document).on("click", ".btnaddchild", function(){  
        var index = $(this).parent().index();
        bootbox.confirm("Do you want to add child?", function(result){
            if(result==true)
            {
                $('.parentrow').eq(index).append(`<div class="childrow">
                <input type="text" class="form-control" id="subtitle" placeholder="Subtitle">
                <input type="text" class="form-control" id="value" placeholder="Value"> 
                <button type="button" class="btnchilddelete">Delete</button>
                <div>`)
            }
           
    
        })
        
    });

    //submit button
    $(document).on("click", ".btnsubmit", function(){ 

        var submitindex = $(this).index();

        parentrow_index = $(this).parent().index();
        console.log("parentrow index",parentrow_index);

         table_index = $(this).parents('.secondrow').siblings('.displaydatarow').find('table').index();
        console.log("table index",table_index);

        $('table').eq(parentrow_index).find('tr').remove();
        $('table').eq(parentrow_index).find('tbody').empty();
        
    
        //var tr_length = $(this).parents('.secondrow').siblings('.displaydatarow').find('tr').length;
        //console.log("trlength",tr_length);

        title = $(this).siblings("#title").val();
        $('table').eq(parentrow_index).append(`<tr><td colspan="2">${title}</td></tr>`);


       var childrow_length=$(this).siblings('.childrow').length;
       console.log("child row length",childrow_length);

       for(t=0; t<childrow_length; t++)
       {
        subtitle = $(this).siblings().find("#subtitle").eq(t).val();
        value = $(this).siblings().find("#value").eq(t).val();
        $('table').eq(parentrow_index).append(`<tr><td>${subtitle}</td><td>${value}</td></tr>`);
        console.log("subtitle",subtitle)
       }
    });

    $(document).on("click", ".btndelete", function(){
        parentrow_index = $(this).parent().index();
        bootbox.confirm("Do you want to delete?", function(result){
        
            if(result==true)
            {
                
                $('.parentrow').eq(parentrow_index).remove();
                $('table').eq(parentrow_index).remove();
            }
        })
       

     });

     $(document).on("click", ".btnchilddelete", function(){
        child_btn_index = $('.btnchilddelete').index(this);

        bootbox.confirm("Do you want to delete child row?", function(result){
            if(result==true)
            {
                $('.childrow').eq(child_btn_index).remove();
                console.log(child_btn_index)
            }
        })
      

     });   




});