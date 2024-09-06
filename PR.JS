// find second elem 

let arr = [22,76,65,53,87,43,69,76]
function findSecondElem(arr){
    let firstelem = arr[0];
    let secondelem = null;
    for (let i = 0; i < arr.length; i++) {
       if( arr[i] > firstelem){
         secondelem = firstelem;
         firstelem = arr[i];
       }else if(firstelem > arr[i] && (secondelem = null || arr[i] > secondelem)){
            secondelem = arr[i]
       } 
    }
    return secondelem
}
console.log(findSecondElem(arr));
