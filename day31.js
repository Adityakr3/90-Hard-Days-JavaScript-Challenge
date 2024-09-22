// Write a function to move all the negative numbers on the odd index and positive numbers on the even index, 0 considered as positive
// const arr = [-1,1,2,-2,3,4,-6,-7]
// function movePositiveAndNegativeNumbers(arr)
// output - [1,-1,2,-2,3,-6,4,-7]

const arr = [-1, 1, 2, -2, 3, 4, -6, -7]
function movePositiveAndNegativeNumbers(arr){
    let newArr = new Array(arr.lenght)
    let everIndex =  0 ;
    let oddIndex = 1;
    for (let i = 0; i < arr.length; i++) {
        if( arr[i] >= 0){
            newArr[everIndex] = arr[i]
            everIndex += 2
        }else{
            newArr[oddIndex] = arr[i]
            oddIndex += 2
        }
    }
    return newArr
    
}
console.log(movePositiveAndNegativeNumbers(arr));
