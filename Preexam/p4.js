//number_array = [4, 3, 6, 2, 1, 1]
number_array = [2, 1, 2]
missing_num = []
repeating_num = []
len = number_array.length
for(i = 0;i < len; i++)
{
    for(j = i+1;j < len; j++)
    {
        if(number_array[i]==number_array[j])
        {
            repeating_num.push(number_array[i])
        }
     if(number_array.includes(i+1) == false)
     {
         missing_num.push(i+1)
     }
    }
}
if(number_array.includes(len)==false)
{
    missing_num.push(len)
}
console.log("Missing element:-",missing_num," repeating number:-",repeating_num)