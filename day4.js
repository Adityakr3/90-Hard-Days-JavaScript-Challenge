// Create a function to check if all the elements in the array is divisible by given num
// const arr = [2,4,6,7]
// const num = 2;
// function getDivisibleNumbers(arr, num) - this function will return array of all elements completely divisible by num


const arr = [2,4,8,5,7,6]
const num = 2;
function getDivisibleNumbers(arr, num){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]% num === 0){
           newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(getDivisibleNumbers(arr,num));
