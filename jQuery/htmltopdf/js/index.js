$(document).ready(function () {

    $('.pdf').click(function(){
       
let pdf = new jsPDF();
let section=$('html');
let page= function() {
    pdf.save('pagename.pdf');
   
};
pdf.addHTML(section,page);
    });
    var title, subtitletext, valuetext;
    var deletemain="";
    // global variable for storing the value of title,subtitle and value
    $('.btnaddmore').click(function () {
        bootbox.confirm({
            message: "Are you sure you want to add more rows?",
            buttons: {
                confirm: {
                    label: 'Yes',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                /* result is a boolean; true = OK, false = Cancel*/
                if (result == true) {
                    $('.secondrow').append(`<div class="parentrow">
                         <input type="text" class="form-control" id="title" placeholder="Title"> 
                         <button type="button" class="btnaddchild">Add Child</button>
                         <button type="button" class="btnsubmit">Submit</button> 
                      <button type="button" class="btndelete">Delete</button></div>`);

                }
            }
        })

        $('.displaydatarow').append(`<table class="table table_data">
        <thead><tr></tr></thead>
                  <tbody>
                  <tr></tr>
                  </tbody>
              </table>`);
    });

    $(document).on("keyup", "#title", function (event) {
        //for title
        vartitletext="";
        titletext = $(this).val();
        console.log("title", titletext)
        parentrow_index = $(this).parent().index();
        
        console.log("parent row index",parentrow_index)
        $('table').eq(parentrow_index).find('th').remove();
        if (titletext == "") {
            $('table').eq(parentrow_index).find('th').remove();

        }
        else{
            $('table thead tr').eq(parentrow_index)
            .append(`<th class="headerclass" colspan="2">${titletext}</th>`);
        }
      
    
    });
    $(document).on("keyup", "#subtitle, #value", function () {
        //for subtitle and value
        var parentrow_index = $(this).parents('.parentrow').index();
        var childrow_length = $(this).parents('.parentrow').find('.childrow').length;
        console.log("parent row index", parentrow_index, "child row length", childrow_length);
        $('table').eq(parentrow_index).find("tbody").empty();
        for (t = 0; t < childrow_length; t++) {

            console.log("t is", t)
           
            if (subtitletext == "" && valuetext == "") {
                console.log("inside if");
                $(this).eq(parentrow_index).find("tbody").empty();
            }

            else {
                console.log("inside else");
                var subtitletext = $(this).parents('.parentrow').find('.subtitle').eq(t).val();
                var valuetext = $(this).parents('.parentrow').find('.value').eq(t).val();
                console.log("subtitle", subtitletext, "value", valuetext)
               // $(this).parents().find("table").eq(parentrow_index).find('tbody').css("background-color","red");
                $(this).parents().find("table").eq(parentrow_index).find("tbody")
                    .append(`<tr><td>${subtitletext}</td><td>${valuetext}</td></tr>`);
            }
        }
    });


    //delete function
    $(document).on("mouseenter",".btndelete",function(){
        deletemain = $('.btndelete').length;
    });
    

    $(document).on("click", ".btnaddchild", function () {

        var index = $(this).parent().index();
        bootbox.confirm({
            message: "Do you want to add child rows?",
            buttons: {
                confirm: {
                    label: 'Yes',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if (result == true) {
                    $('.parentrow').eq(index).append(`<div class="childrow">
                <input type="text" class="form-control subtitle" id="subtitle" placeholder="Subtitle">
                <input type="text" class="form-control value" id="value" placeholder="Value"> 
                <button type="button" class="btnchilddelete">Delete</button>
                <div>`)
                    // childrow_length=$('.parentrow').eq(index).find('.childrow').length;  
                    // console.log("childrow length",childrow_length);
                    // if(childrow_length>0)
                    // {
                    //     $('.btndelete').prop("disabled",true)
                    // }

                }
            }
        })
    });
    $(document).on("click", ".btndelete", function () {
        parentrow_index = $(this).parent().index();
        bootbox.confirm("Do you want to delete?", function (result) {
        var finaldel=$(this).parent().length;

            if (result == true) {

                $('.parentrow').eq(parentrow_index).remove();
                $('table').eq(parentrow_index).remove();
                if(finaldel==1)
                {
                    $('.btndelete').prop("disabled",true)
                }
            }
        })
    });

    $(document).on("click", ".btnchilddelete", function () {
        child_btn_index = $('.btnchilddelete').index(this);

        bootbox.confirm("Do you want to delete child row?", function (result) {
            if (result == true) {
                $('.childrow').eq(child_btn_index).remove();
                $('table tbody tr').eq(child_btn_index).remove();
            }
        })
    });
});