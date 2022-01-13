n=5;
var string=""
for(i=0; i<n; i++)
{
    
    for(j=0; j<n; j++){
        if((n-1)<=(i+j))/*if((i-j)<=0)*/{
            string+="*";
        }
        else{
            string+=" ";
        }
    }
     string+="\n"
}
console.log(string)