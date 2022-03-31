let myarray = [7,3,0,1,9];

console.log(myarray);
console.log(myarray.length);
for(j=0;j<myarray.length;j++){
for(i=0;i<myarray.length;i++){
    if(myarray[i]>myarray[i+1])
    {
        var temp = myarray[i]
        myarray[i]=myarray[i+1]
        myarray[i+1]=temp
        
    }
}
}
console.log(myarray);