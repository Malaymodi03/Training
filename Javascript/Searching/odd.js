var x;
function odd(x){
    if(x<11){
        number = x*2-1;
        x++;
        console.log(number);
        odd(x);
    }


}

odd(1)
console.log(x)