n=5;
var string=""
for(i=1; i<=n; i++)
{
    
    for(j=1; j<=i; j++){
        string+="*";
        
    }
    string+="\n"
}
console.log(string)

//Second Method
var n=11;
var str="";
for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        if(i-j<n && i-j>=n-n){
            str+="*"
        }
        else{
            str+=" "
        }
    }
    str+="\n"
}
console.log(str)