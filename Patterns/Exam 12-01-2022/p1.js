/*var n=3;
var str="";

for(i=-(n+2); i<=n+2; i++)
{
    for(j=-n; j<=n; j++)
    {
        if(i==-5 && j==0)
        {
            str+="O"
        }
       /* else if(/*i-j==-3*//* i-j==-5 || i-j==-2)
        {
            str+="\\"
        }
        */
        /*else if(Math.abs(i)-Math.abs(j)==-1)
        {
            str+="/"
        }
        */
       /* else if(/*(i>=(n-1) && i<=(n+2))*//*i==5 )
        /*{
            str+="="
        }
        else if(j==0 && i==2)
        {
            str+="="
        }
        else if(j==0 && i==3)
        {
            str+="="
        }
        else if(j==0 && i==4)
        {
            str+="="
        }
        else if(i==1 && j==-2)
        {
            str+="-"
        }
        else if(i==1 && j==-1)
        {
            str+="-"
        }
        else if(i==1 && j==0)
        {
            str+="-"
        }
        else if(i==1 && j==1)
        {
            str+="-"
        }
        else if(i==1 && j==2)
        {
            str+="-"
        }
        else if(i==-4 && j==0)
        {
            str+="-"
        }
        else if(i==-3 && j==0)
        {
            str+="-"
        }
        else if(i==-2 && j==0)
        {
            str+="-"
        }
        else if(i==-1 && j==0)
        {
            str+="-"
        }
        else if(i==0 && j==0)
        {
            str+="-"
        }
        else if(i==1 && j==0)
        {
            str+="-"
        }
        else if(i==0 && j==-1)
        {
            str+="-"
        }
        else if(i==0 && j==0)
        {
            str+="-"
        }
        else if(i==0 && j==1)
        {
            str+="-"
        }
        else if(i==-1 && j==0)
        {
            str+="-"
        }
        else if(i==-2 && j==-2)
        {
            str+="-"
        }
        else if(i==-2 && j==-1)
        {
            str+="-"
        }
        else if(i==-2 && j==0)
        {
            str+="-"
        }
        else if(i==-2 && j==1)
        {
            str+="-"
        }
        else if(i==-2 && j==2)
        {
            str+="-"
        }
        else if(i==-3 && j==-1)
        {
            str+="-"
        }
        else if(i==-3 && j==0)
        {
            str+="-"
        }
        else if(i==-3 && j==1)
        {
            str+="-"
        }
        else if(i==-4 && j==-1)
        {
            str+="/"
        }
        else if(i==-3 && j==-2)
        {
            str+="/"
        }
        else if(i==-2 && j==-3)
        {
            str+="/"
        }
        else if(i==-4 && j==1)
        {
            str+="\\"
        }
        else if(i==-3 && j==2)
        {
            str+="\\"
        }
        else if(i==-2 && j==3)
        {
            str+="\\"
        }
        else if(i==-1 && j==1)
        {
            str+="\\"
        }
        else if(i==0 && j==-2)
        {
            str+="/"
        }
        else if(i==1 && j==-3)
        {
            str+="/"
        }
        else if(i==1 && j==-3)
        {
            str+="\\"
        }
        else if(i==0 && j==2)
        {
            str+="\\"
        }
        else if(i==1 && j==3)
        {
            str+="\\"
        }
        else if(i==-1 && j==-1)
        {
            str+="/"
        }
        
        else if((Math.abs(j)==2 && i>=2))
        {
            str+="|"
        }

        /*else if(i+j>=n-1 && i+j<=-(n-1))
        {
            str+="-"
        }*/
       /* else{
            str+=" "
        }
    }
    str+="\n"
}
console.log(str)*/
var n=3;
var str=""

for(i=-(n+2); i<=n+2; i++)
{
    for(j=-n; j<=n; j++)
    {
        if(i==5 && j==0)
        {
            str+="0"
        }
        else
        {
            str+=" "
        }
    }
    str+"\n"
}
console.log(str)