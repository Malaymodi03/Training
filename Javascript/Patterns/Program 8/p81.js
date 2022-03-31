/*var n=5;
var string="";
 
for(i=1;i<=n;i++)
{
   for(j=1;j<=n;j++){
       if((i+j>=n+1))
       {
           string+="@"
       }
       else{
           string+=" "
       }
   }
   string+="\n"
}
//console.log(string)
for(i=1;i<=n;i++)
{
   for(j=1;j<=n;j++){
       if((i+j>=n+1))
       {
           string+="@"
       }
       else{
           string+=" "
       }
   }
   string+="\n"
}
console.log(string)
*/
var n=5;
var string="";
 
for(i=-n;i<=n;i++)
{
   for(j=-n;j<=n;j++){
       if((i+j>=(-n-1)) && (i+j<=(-n-3)))
       {
           string+="@"
       }
       else{
           string+=" "
       }
   }
   string+="\n"
}
//console.log(string)
for(i=1;i<=n;i++)
{
   for(j=1;j<=n;j++){
       if((i+j>=n+1))
       {
           string+="@"
       }
       else{
           string+=" "
       }
   }
   string+="\n"
}
console.log(string)