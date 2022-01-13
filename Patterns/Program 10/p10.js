/*n=13;
var str="";

for(i=1;i<n;i++){
    for(j=1;j<=n;j++)
    {
        if(j==1 || i==1 || i==13 || j==13 ){
            str+="0"
        } 
      else if(i==j)
      {
          str+=String.fromCharCode(i+j + 97)
      }

     /* else if((i+j<=14))
      {
          str+=j;
      }
       

      else if((i+j>=15))
      {
          str+=" "
      }
      else{
          str+=" "
      }
      
     
      
    }
    str+="\n"
}
console.log(str)
*/

//----------------------------------------------------------------------------------------------

n=5;
var str="";

for(i=-(n+1);i<=n+1;i++){
    for(j=-(n+1);j<=n+1;j++)
    {
        if( i==-(n+1) || i==(n+1) || j==-(n+1) || j==(n+1) ){
            str+="0"
        } 
      else if(Math.sign(i)==Math.sign(j) && (Math.abs(i)-Math.abs(j)>0) || j==0)
      {
          str+=String.fromCharCode(Math.abs(i) - Math.abs(j) + 97);
      }

      else if(Math.sign(i)!=Math.sign(j) && (Math.abs(i)-Math.abs(j)>=0))
      {
          str+=Math.abs(i)-Math.abs(j)+1;
      }

     

      
      else{
          str+=" "
      }
      
     
      
    }
    str+="\n"
}
console.log(str)