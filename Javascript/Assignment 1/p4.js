//P4:-  Build a calculator 
var variable_1 = 5;
var variable_2 = 10;

var operator="+";
switch(operator){
    case "+":
        console.log(variable_1+variable_2);
        break;
    
    case "-":
        console.log(variable_1-variable_2);
        break;

    case "*":
        console.log(variable_1*variable_2);
        break;

    case "/":
        console.log(variable_1/variable_2);
        break;

    case "%":
        console.log(variable_1%variable_2);
        break;

    default:
        console.log("invalid operator");
        break;
}
