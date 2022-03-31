/*Create two arrays one containing numbers from 0-9 and the second containing letters from
a-e. Create 10 random pairs of 3 alphanumeric and store them in an array.
Input:
numberArray = [0,1,2,3,4,5,6,7,8,9]
letterArray = [‘a’,’b’,’c’,’d’,’e’]
Output:
[5ab, ba6, 23a, …, ec0]*/

//creating arrays
var numberArray = [0,1,2,3,4,5,6,7,8,9]
var letterArray = ['a','b','c','d','e']
var merger_array = []

var concat_array = numberArray.concat(letterArray);

for(i=0;i<numberArray.length-1;i++)
{
var array_3 = numberArray[Math.floor(Math.random() * (numberArray.length))];
var array_4 = letterArray[Math.floor(Math.random()*(letterArray.length))];
var array_5 = array_3.concat_array(array_4);
console.log(array_5)
}
/*for(i=0;i<numberArray.length;i++)
{
        array_3=numberArray[i]+letterArray[i]+letterArray[i]
}
console.log(array_3)
numberArray.forEach(letterArray=> {
    array_3=[letterArray]
});
console.log(array_3)
numberArray.forEach(numberArray => {
      array_3[letterArray] 
});

console.log(array_3)
*/