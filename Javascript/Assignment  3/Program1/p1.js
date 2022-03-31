//P1:- Find if given substring is in string

var st1 = "Karan, Yash, Jaydeep, Parth, Toyam";
console.log("Our String is ==> "+st1);
let st2 = st1.substring(7, 11);
console.log("Our Substring is ==> "+st2);

if (st1.search(st2)) {
    console.log("True")
}

if (st1.includes("Karan")) {
    console.log("True");
}

if (st1.startsWith('Karan')) {
    console.log("True");
}