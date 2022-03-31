/*var fruits=["Apple","Banana","Chickoo","Grapes","Mango","Orange"];

console.log("First element of array is ==> "+fruits[0]);
console.log("Second element of array is ==> "+fruits[1]);
console.log("Third element of array is ==> "+fruits[2]);
console.log("Fourth element of array is ==> "+fruits[3]);
console.log("Fifth element of array is ==> "+fruits[4]);
console.log("Sixth element of array is ==> "+fruits[5]);
*/
let veggie=[
    "Tomato",
    "Cauliflower",
    "Cabbage",
    "Potato",
    "Beans"
]

veggie.pop();
veggie.push("beans");
veggie.shift();
veggie.unshift("Brocolli");
for(v=0;v<veggie.length;v++){
    console.log(veggie[v]);

}

console.log("Total elements inside veggie array is ==> "+veggie.length);
//let f = fruits.sort();



