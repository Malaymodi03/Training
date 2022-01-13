/*n=5;
var string=""
for(i=1; i<=n; i++)
{    
    
    for(j=0; j<=n-i; j++){
        //console.log(" ")
        string+=" "
        
    }
    for(j=1;j<=i; j++)
    {
       // console.log(j)
       string+=j
    }


    for(j=i-1; j>=1; j--)
    {
       // console.log(j);
       string+=j
    }
    //console.log("\n")
    string+="\n"

}
console.log(string)
*/

n=5;
var string=""
for(i=0; i<n; i++)
{
    
    for(j=-n; j<n; j++){
        if(Math.abs(i) - Math.abs(j)>=0)/*if((i-j)<=0)*/{
            string+=Math.abs(i) - Math.abs(j) + 1
        }
        else{
            string+=" ";
        }
    }
     string+="\n"
}
console.log(string)