// function factorial(number){
//     if(number==1){
//         return 1
//     }
//     else{
//     number=number*number-1;
//     number--;
//     }



// }

// factorial(5)


var fact=1

function factorial(number)
{
    fact*=number

    number--
    //console.log(number)
    if(number==0)
    {
        return "abcd"
    }
    factorial(number)
}
factorial(5)
console.log(fact);
// var fact=1;
// function factorial(number){

//     if(number==0)
//     {
//         return 0;
//     }
//     number++;



// }