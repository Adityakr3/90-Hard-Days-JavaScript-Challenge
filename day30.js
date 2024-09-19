// Write a function to find the sum of all the non-repeating elements
// const arr = [1,1,2,4,5,5,3]
// function getUniqueNumberSum(arr) - this function will return sum of all unique numbers
// output - 2 + 4 + 3 = 9

const arr = [1,1,2,4,5,5,3];
function getUniqueNumberSum(arr){
   let newArr = {};
   let sum = 0 ;
  for (const num of arr) {
    newArr[num] = ( newArr[num] || 0 ) + 1
  }

  for (const num in newArr) {
    if(newArr[num] === 1){
        sum += parseInt(num)
    }
  }
  return sum
}
console.log(getUniqueNumberSum(arr));
