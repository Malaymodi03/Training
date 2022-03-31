let myarray = [5,1,7,3]
console.log(myarray)
/*for(j=0;j<myarray.length;j++){
for(i=0;i<myarray.length;i++){
    if(myarray[i+1]<myarray[i]){
        temp = myarray[i+1]
        myarray[i+1]=myarray[i]
        myarray[i]=temp;
        
    }
    console.log(myarray)
}
}*/
//console.log(myarray)
for(i=1;i<myarray.length;i++)
{
    let cv = myarray[i];

    for(j=i-1; j>=0 && myarray[j]>cv;j--)
    {
        myarray[j+1]=myarray[j];
    }
    myarray[j+1]=cv;
    console.log(myarray)
}