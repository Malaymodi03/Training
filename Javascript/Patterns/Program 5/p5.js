// n=5;
// var string=""
// for(i=0; i<n; i++)
// {
    
//     for(j=0; j<n; j++){
//         if((n-1)<=(i+j))/*if((i-j)<=0)*/{
//             string+="*";
//         }
//         else{
//             string+=" ";
//         }
//     }
//      string+="\n"
// }
// console.log(string)

n=5;
var str=""
for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        if((i+j>n-2) && (i+j<(n+4))){
            str+="*"
        }
        else{
            str+=" "
        }
    }
    str+="\n"
}
console.log(str)