// $(document).ready(function(){
//     $(".btnsubmit").click(function(){
//     $('#myform').validate({
//         rules: {
//             fname : {
//                 required: true,
//                 minlength: 1
//                 },
//             lname: {
//                    required: true,
//                    minlength: 1
//             }
//         },


//         messages: {
//             fname: 'This field is required',
//             lname: 'This field is required',
//         },

//         submitHandler: function(form) {
            
//             form.submit();
//             alert("form submitted")
//           }
//     });
// });

// });

// $(document).ready(function(){
//     $(".btnsubmit").click(function(e){
//         e.preventDefault();
// $('#myform').validate({
//     ignore:[],
//     rules: {
//         fname : {
//             required: true,
//             minlength: 1
//             },

//         lname : {
//             required: true,
//             minlength: 1
//             //equalTo: "fname" // 'name' of other field
//                 },

//         email : {
//             required: true,
//             minlength: 1
//             //equalTo: "fname" // 'name' of other field
//                 },

//         cno : {
//             required: true,
//             minlength: 1

//             //equalTo: "fname" // 'name' of other field
//                 },         

//         about : {
//                 required: true,
//                 minlength: 1
//                 }
        
//     },

//     messages: {
//         fname: 'Please fill first name',
//         lname: 'Please fill last name',
//         email: 'Please fill email',
//         cno: 'Please provide contact details',
//         about: 'Please say about yourself'
        
//     },

//     submitHandler: function(form) {
        
//         // form.submit();
//         alert("form submitted")
//       }
// });
// });
// });