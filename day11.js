// Given an array, write functions to find the minimum and maximum elements in it. 

let arr = [98,54,3,4,54,65,53,52,];
function find_Min_And_Max(arr){
  arr.sort((a,b)=>a-b)
  let min = arr[0];
  let max = arr[arr.length-1]
  return `the min number is ${min} and the max number is ${max}`
}
console.log(find_Min_And_Max(arr));
