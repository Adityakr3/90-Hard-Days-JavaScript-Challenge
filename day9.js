// Write a function that finds the second largest number in an array. 
// If the array has less than two distinct elements, return None.

let array = [98,56,76,23];
function  Second_Largest_Number(arr){
  let first = arr[0];
  let second = null;
  if(arr.lenght < 2){
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > first){
        second = first
        first = arr[i]
    }else if( arr[i] < first && (second == null || arr[i] > second)){
        second = arr[i];
    }
  }
  return second;
}
console.log(Second_Largest_Number(array));
 