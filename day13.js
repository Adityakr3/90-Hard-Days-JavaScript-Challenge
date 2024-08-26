// Write a function to merge two arrays and sort in ascending order.

// Approach 1

let arr = [1,4,5]
let arr1 = [2,3,6]
function mergeAndSortArrays(arr,arr1){
   let mergeArray =[...arr,...arr1]
   mergeArray.sort((a,b)=>a-b)
   return mergeArray
}
console.log(mergeAndSortArrays(arr , arr1));

