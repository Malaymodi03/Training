// n=5
// var str="";
// for(i=-(n+1); i<=(n+1); i++)
// {
//   for(j=-(n+1); j<=(n+1); j++)
//   {
//     if(j==-(n+1) || j==(n+1))
//     {
//       str+="|";
//     }
//     else if(i==-(n+1) || i==(n+1))
//     {
//       str+="=";
//     }
//     else if(i==0 && j==0)
//     {
//       str+="X";
//     }
//     else if(i==j)
//     {
//       str+="\\";
//     }
//     else if(Math.abs(i)==Math.abs(j))
//     {
//       str+="/";
//     }
//     else if(i==0 || j==0)
//     {
//       str+="0";
//     }
//     else if(Math.sign(i)==Math.sign(j) && Math.abs(i)-Math.abs(j)>0)
//     {
//       str+=Math.abs(j);
//     }
//     else if(Math.sign(i)!=Math.sign(j) && Math.abs(i)-Math.abs(j)<0)
//     {
//       str+=n-Math.abs(j)+1;
//     }
//     else if(Math.sign(i)==Math.sign(j) && Math.abs(i)-Math.abs(j)<0)
//     {
//       str+=String.fromCharCode(97+ n-Math.abs(j)+1);
//     }
//     else if(Math.sign(i)!=Math.sign(j) && Math.abs(i)-Math.abs(j)>0)
//     {
//       str+=String.fromCharCode(97+Math.abs(j));
//     }
//     else
//     {
//       str+=" ";
//     }

//   }
//   str+="\n";
// }
// console.log(str);

/*arr=[1,2,3]
arr1=[]
length=arr.length;
for(i=0; i<length; i++)
{
a=Math.floor(Math.random()*arr.length);
console.log(a)
console.log(arr[a]);
arr1.push(a);
arr.splice(a,1)
console.log(arr)
}
console.log(arr1);
console.log(arr);
*/


 myarray = [1,13,10,11,3,5,19]
 var length = myarray.length;
 mid=Math.floor(length/2);
 //console.log(myarray[mid]);
 for(i=0; i<length; i++)
 {
   left = myarray[0];
   right = myarray[]
 }