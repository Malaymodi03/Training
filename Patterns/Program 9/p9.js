n=4;
var str=""
for(i=0; i<=n; i++)
{
    for(j=0; j<=n; j++)
    {
        
        if((i==Math.floor(n/2)) && (j==Math.floor(n/2)))
        {
            str+="0"
        }

        else if(i == j )
        {
            str+="\\"
        }

        else if(i+j==n)
        {
            str+="/"
        }

        else if(i == 0|| j==n-1){
            str+="-"
        }

        else if(j==0 || j==n){
            str+="|" 
        }
        else{
            str+=" "
        }
        
    }
    str+="\n"
}
console.log(str)