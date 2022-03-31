var a="";
function add(index){
    if(index>3)
    {
        return index
    }
    console.log("B");
    a+=add(index+1)
    console.log("A")
    return a;
}
add(0)