//var x=5;
//var prime=5;

// if(prime==0 || prime==1){
//     console.log("Given Number is Not Prime")

// }

// else if(prime/prime==1 && prime/1==prime){
//     console.log("Given Number is prime")
// }

function prime(number,index){

    if(index > Math.sqrt(number)){
        return "prime"
        //console.log("prime")
    }

    if(number%index==0){
        return "not prime"
        //console.log("not prime")
    }

    index+=1;
    return prime(number,index)

}

console.log(prime(5,2))

