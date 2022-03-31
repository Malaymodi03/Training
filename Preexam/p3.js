myarray = [12,34,10,6,40];
//myarray = [10,25,35,14,51];
temp_array = []
pair_array = []
var sum;
for(let i=0; i<myarray.length; i++){

    for(j=i+1; j<myarray.length; j++){
        sum=0;
        sum = myarray[i] + myarray[j];
        temp_array.push(sum)
    

    }
    
}
console.log(temp_array)
console.log(Math.max(...temp_array));