function linearSearch(arr, val){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val){
            return i
        } 
    }
    return `Elem not found in array`
}
console.log(linearSearch([12,67,54,32,67,88], 88));
