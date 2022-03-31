var array_sum=[1,2,3,4,5,6,7,8,9,10]
// var sum=0;
//  for(i=0;i<array_sum.length; i++){
//      sum=sum+array_sum[i]

//  }
//  console.log(sum);


var sum1=0;
myfun(0)
 function myfun(index){
   if(index <= array_sum.length-1)
   {
       sum1 += array_sum[index];
       index++;
       myfun(index);
   }

 }
 console.log(sum1);


 