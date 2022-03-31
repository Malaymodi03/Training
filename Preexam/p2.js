myarray = [3,1,3,4,5,4]
repeat=[]
missing=[]
for(i=0;i<myarray.length;i++){

    for(j=i+1;j<myarray.length;j++){

        if(myarray[i]==myarray[j]){

            repeat.push(myarray[i]);
        }

    if(myarray.includes(i+1) == false)
     {
         missing.push(i+1)
     }


    }



}
console.log("Repeating = "+repeat);

console.log(repeat);
console.log(missing)

