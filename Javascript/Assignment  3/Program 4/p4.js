//P4:- Do multiplication elements of two array with same length and create 3rd array

var array_1 = [1,2]
var array_2 = [3,4]

var array_3 = []

for(var i=0; i<array_1.length; i++){
    for(var j=0; j<array_2.length; j++){
        array_3[i] = array_1[i]*array_2[j];
    }
}

console.log(array_3);
