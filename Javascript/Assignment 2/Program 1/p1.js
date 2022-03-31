//P1:- Give Result of asin(x) +acos(x)
//importing module
const readline =require("readline-sync");


//This is First Way
console.log("Enter Number")
var x = Number(readline.question());
console.log(Math.asin(x)+Math.acos(x));

//This is Second Way
/*var a,b,c;

a=Math.asin(x);

b=Math.acos(x);

c=a+b;
console.log(c);*/

//Output will be same in both ways