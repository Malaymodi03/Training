myarray = [-1,0,1,5,10,-8,6];
//myarray = [5,6,8,-7,5]
temp_array = []
pair_array = []

var sum;
for(let i=0; i<myarray.length; i++){

    for(j=i+1; j<myarray.length; j++){
        sum=0;
        sum = Math.abs(myarray[i] + myarray[j]);
        temp_array.push(sum)
        min=Math.min(...temp_array)
        // if(sum==0){
        //     pair_array.push(myarray[i],myarray[j])
        // }

    }
    
}

for(i=0; i<myarray.length; i++){
    for(j=i+1; j<myarray.length; j++){
        if(Math.abs(myarray[i]+myarray[j])==min){
            //pair_array.push(myarray[i],myarray[j])
            console.log(myarray[i],myarray[j])
        }
    }
}
//console.log(Math.abs(...temp_array))
//console.log(pair_array);

