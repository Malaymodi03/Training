var n=5;
var string="";

for(i=0;i<n;i++)
{
    for(j=0;j<n;j++){
        if((i+j==n-1) || (i-j==0))
        {
            string+="#"
        }
        else{
            string+="*"
        }
    }
    string+="\n"
}
console.log(string)

//2nd Method

/*var n=5;
var string="";

for(i=1;i<=n;i++)
{
    for(j=1;j<=n;j++){
        if((i==j) || (i+j==6))
        {
            string+="#"
        }
        else{
            string+="*"
        }
    }
    string+="\n"
}
console.log(string)**/