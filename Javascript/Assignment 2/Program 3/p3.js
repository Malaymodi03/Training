//P3:- Write program for given formula in attached image

var a,b,c;
a=1;
b=5;
c=3;

var root_variable, denominator_variable;

root_variable=b*b-4*a*c;
denominator_variable=2*a;

discriminant=Math.sqrt(root_variable);

if(discriminant>0){

var x1,x2;

x1=(-b+discriminant)/denominator_variable;
x2=(-b-discriminant)/denominator_variable;

console.log(x1);
console.log(x2);
}


