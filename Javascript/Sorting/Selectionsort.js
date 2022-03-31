//let myarray = ["d","f","z","m","o","A","a"];
let myarray = ["Z","d","V","A","v"];
//let myarray = [7,3,0,1,9];
//let myarray = ["e","a","G","A","T","c","d","P"]

// console.log(myarray);


function selection_sort(fiv,sev){
    fiv=(fiv.charCodeAt())
    sev=(sev.charCodeAt())

    if(fiv>91){
        fin=fiv-97
    }
    else{
        fin=fiv-65
    }
    if(sev>91){
        sen=sev-97
    }
    else{
        sen=sev-65
    }
    if(fin == sen && sev<fiv){
        return true
    }
    else if(fin<sen){
        return true
    }
    return false
}

for(i=0;i<myarray.length;i++){
    let min = i;
    for(j=i+1;j<myarray.length;j++){
        if(selection_sort(myarray[j],myarray[min]))
        {
            min=j;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        }
        
        // console.log(myarray);
    }
        temp=myarray[min];
        myarray[min]=myarray[i];
        myarray[i]=temp;
}

console.log(myarray);

