var n = 3;
var str = ""

for (i = 0; i < 1; i++) {
    for (j = -n; j <= n; j++) {
        if (i == 0 && j == 0) {
            str += "O\n"
        }
        else {
            str += " "
        }
    }

}
for (t = 0; t < n - 1; t++) {
    for (i = 0; i <= n; i++) {
        for (j = -n; j <= n; j++) {
            if (i + j == -1) {
                str += "/"
            }
            else if (j - i == 1) {
                str += "\\"
            }
            else if ((Math.abs(i) - Math.abs(j) < n) && Math.abs(i) - Math.abs(j) >= 0) {
                str += "-"
            }
            else {
                str += " "
            }
        }
        str += "\n"
    }
}

for(i=0; i<n; i++){
    for(j=-n; j<=n; j++){
        if(j==0){
            str+="="
        }
        else if(Math.abs(j)==2)
        {
            str+="|"
        }
        else
        {
            str+=" "
        }
    }
    str+="\n"
}
for(i=0; i<1; i++)
{
    for(j=0; j<2*n+1; j++)
    {
        str+="="
    }
}
console.log(str)