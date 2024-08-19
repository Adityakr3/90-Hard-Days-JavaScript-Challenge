//"3. Create a function to check if the elements on odd index is an odd number
// const arr = [0,11,4,3,6]
// function checkOddIndexNumber(arr) - this function will return true if all elements in odd index are odd numbers

const arr = [0,11,4,3,6];
function checkOddIndexNumber(arr){
  for (let i = 1; i < arr.length; i+=2) {
    if([arr[i]%2==0]) {
       return false
    }
  }
  return true
}
console.log(checkOddIndexNumber(arr));
