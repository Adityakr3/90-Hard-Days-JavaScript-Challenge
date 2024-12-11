function binarySearch(arr,val) {
    let start = 0;
    let end = arr.length-1
    while(start <= end){
        let middle = Math.floor((start+end)/2)
        if(arr[middle] === val){
            return middle
        }
        else if (arr[middle] < val){
            start = middle + 1
        }
        else{
            end = middle - 1
        }
    }
    return `elem not found in the array`
}
console.log(binarySearch([12,23,45,56,98,122], 45));
