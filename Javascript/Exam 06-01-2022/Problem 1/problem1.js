var n = 2, z = -25, i = 2, k = 2, theta = 5, pi = Math.PI, e = Math.E;
var square_root;
var exp_variable;
var answer;

square_root = Math.sqrt(Math.abs(z));

add_variable = i * ((theta + (2 * k * pi)) / n);

exp_variable = Math.pow(e, add_variable)

answer = square_root * exp_variable;

console.log(answer);