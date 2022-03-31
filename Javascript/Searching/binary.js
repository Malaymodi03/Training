my_array=[1,2,3,4,5,6,7,8,9,10,11]
search=11;

function binary(array,search,start,end){
    mid=Math.floor((start+end)/2)

    if(my_array[start]==search){
        return start
       //console.log(my_array[start])
    }

    else if(my_array[end]==search){
       return end
       //console.log(my_array[end])

    }

    else if(my_array[mid]==search){
        return mid
        //console.log(my_array[mid])
    }
    else if(my_array[mid]>search){
        return binary(array,search,start,mid)
    }

    else if(my_array[mid]<search){
        return binary(array,search,mid,end)
    }

    // else if(my_array[start]>search && my_array[mid]<search){
    //    return binary(array,search,start,mid)
    // }
    // else if(my_array[mid+1]>search && my_array[end]<search){
    //     return binary(array,search,mid,end)
    // }
    else{
        return "invalid"
    }

}
console.log(binary(my_array,search,0,my_array.length-1))