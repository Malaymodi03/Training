var n =5;
var str ="";
for(i=-(n+1); i<=(n+1); i++)
{
    for(j=-(n+1); j<=(n+1); j++)
    {
        if(Math.abs(j)==n+1)
        {
            str+="|"
        }
        
       else if(Math.abs(i)==n+1)
        {
            str+="="
        }
        else if(i==0 && j==0)
        {
            str+="X"
        }
        else if(i==j)
        {
            str+="\\"
        }
        else if(Math.abs(i)==Math.abs(j))
        {
            str+="/"
        }
        // else if(Math.abs(i)-Math.abs(j)==0)
        // {
        //     str+="\\"
        // }
        else if(Math.sign(i)==Math.sign(j) && Math.abs(i)-Math.abs(j)>=0)
        {
            str+=Math.abs(j)
        }
        else if(Math.sign(i)!=Math.sign(j) && Math.abs(i)-Math.abs(j)<=0 && i!=0)
        {
            str+=n-Math.abs(j)+1
        }
        else if((Math.abs(i)- Math.abs(j)==Math.abs(i)) || (Math.abs(j) - Math.abs(i)==Math.abs(j))){
           str+="0"
        }
        else if((Math.sign(i)==Math.sign(j) && Math.abs(i)-Math.abs(j)<=-1 && i!=0))
        {
            str+=String.fromCharCode(n- Math.abs(j) + 97 +1)
        }
        else if((Math.sign(i)!=Math.sign(j) && Math.abs(i)-Math.abs(j)>=1 && i!=0))
        {
            str+=String.fromCharCode(Math.abs(j) + 97 )
        }
        
        else{
            str+=" "
        }
    }
    str+="\n"
}
console.log(str)