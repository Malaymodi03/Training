$(document).ready(function () {
    var title, subtitletext, valuetext;
    var deletemain = "";
    var parentrow_length;
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

                    $('.displaydatarow').append(`<table class="table table_data">
        <thead><tr></tr></thead>
                  <tbody>
        
                  </tbody>
              </table>`);

                }
            }
        })

        // $('.displaydatarow').append(`<table class="table table_data">
        // <thead><tr></tr></thead>
        //           <tbody>
        //           <tr></tr>
        //           </tbody>
        //       </table>`);
    });

    $(document).on("keyup", "#title", function (event) {
        //for title
        vartitletext = "";
        titletext = $(this).val();
        // console.log("title", titletext)
        parentrow_index = $(this).parent().index();

        // console.log("parent row index", parentrow_index)
        $('table').eq(parentrow_index).find('th').remove();
        if (titletext == "") {
            $('table').eq(parentrow_index).find('th').remove();

        }
        else {
            $('table thead tr').eq(parentrow_index)
                .append(`<th class="headerclass" colspan="2">${titletext}</th>`);
        }


    });
    $(document).on("keyup", "#subtitle, #value", function () {
        //for subtitle and value
        var parentrow_index = $(this).parents('.parentrow').index();
        var childrow_length = $(this).parents('.parentrow').find('.childrow').length;
        // console.log("parent row index", parentrow_index, "child row length", childrow_length);
        $('table').eq(parentrow_index).find("tbody").empty();
        for (t = 0; t < childrow_length; t++) {
            var subtitletext = $(this).parents('.parentrow').find('.subtitle').eq(t).val();
            var valuetext = $(this).parents('.parentrow').find('.value').eq(t).val();
            // console.log("t is", t)

            if (subtitletext == "" && valuetext == "") {
                // console.log("inside if");
                $(this).eq(parentrow_index).find("tbody").empty();
            }

            else {
                console.log("inside else");
                var subtitletext = $(this).parents('.parentrow').find('.subtitle').eq(t).val();
                var valuetext = $(this).parents('.parentrow').find('.value').eq(t).val();
                console.log("subtitle", subtitletext, "value", valuetext)
                // $(this).parents().find("table").eq(parentrow_index).find('tbody').css("background-color","red");
                $(this).parents().find("table").eq(parentrow_index).find("tbody")
                    .append(`<tr class="trclass"><td>${subtitletext}</td><td>${valuetext}</td></tr>`);
            }
        }
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

                    //   $('tbody').eq(index).append(`<tr></tr>`);

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



    //delete function
    $(document).on("mouseenter", ".btndelete", function () {
        deletemain = $(this).parents('.secondrow').find('.parentrow').length;
        //  console.log(deletemain);
        // deletemain = $('.btndelete').length;
        // console.log(deletemain);
    });

    $(document).on("click", ".btndelete", function () {
        parentrow_index = $(this).parent().index();
        //parentrow_length = $(this).parent().length;
        parentrow_length = $(this).parents(".parentrow").find(".childrow").length;
        // var field_title = $(this).parents('.User_Enter_data_field').find('.Add_Child_Class').length;
        // console.log("prl", parentrow_length);
        //  var finaldel=$(this).parent().length;
        if (parentrow_length > 0) {
            // console.log("inside ifff")
            $('.btndelete').prop("disabled", false)

        }
        else if (parentrow_length == 0 && deletemain > 1) {
            var deletemainindex = this;

            $('.delete_button').prop('disabled', false);
            bootbox.confirm("Do you want to delete?", function (result) {


                if (result == true) {
                    var deletebtnindex = $(".btndelete").index(deletemainindex);
                    // $('.parentrow').eq(parentrow_index).remove();
                    // $('table').eq(deletebtnindex).remove();
                    $("table").eq(deletebtnindex).remove();
                    $(".parentrow").eq(deletebtnindex).remove();
                    // console.log("pri", parentrow_index)

                }
            })
        }
        else if (deletemain == 1) {
            $('.btndelete').prop('disabled', false);

        }
        else {
            $('.deletemain').prop('disabled', false);
        }

    });

    $(document).on("click", ".btnchilddelete", function () {
        // child_btn_index = $('.btnchilddelete').index(this);
        // var childrow_index = $(this).parents('.parentrow').index();
        child_btn_index = $('.btnchilddelete').index(this);
        // console.log("cri", childrow_index);
        //  childrow_length = $(this).parents('.parentrow').find('.childrow').length;


        var mychildbtn = this;
        bootbox.confirm("Do you want to delete child row?", function (result) {
            if (result == true) {

                var findindex = $(mychildbtn).closest(".parentrow").index();
                console.log(findindex);

                //    var deletechildindex = $('.btnchilddelete').index(mychildbtn);
                var deletechildindex = $(mychildbtn).closest(".parentrow").find(".btnchilddelete").index(mychildbtn);
                console.log("deletechildindex",deletechildindex);

                //var deletechildlength = $(".childrow .btnchilddelete").length;
                //console.log("deletechildindex", deletechildindex);

                $(mychildbtn).closest(".parentrow").find('.childrow').eq(deletechildindex).remove();
                $(".table").eq(findindex).find('tbody tr').eq(deletechildindex).remove();



                $('.childrow').trigger('keyup');
            }
        })
    });
});