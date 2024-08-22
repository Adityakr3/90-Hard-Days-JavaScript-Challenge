// Swap Elements of array given index left
// const arr = [1,2,3,4,5,6]
// const swapLeftBy = 2
// output - [3,4,5,6,1,2]
// function getLeftSwappedArrayByIndex(arr, swapLeftBy) -
// At his will return an swapped array with given index

const arr = [1, 2, 3, 4, 5, 6];
const swapLeftBy = 2;

function getLeftSwappedArrayByIndex(arr, swapLeftBy) {
    const firstPart = arr.slice(swapLeftBy);
    const secondPart = arr.slice(0,swapLeftBy);
    const result = firstPart.concat(secondPart);
    return result;
}
console.log(getLeftSwappedArrayByIndex(arr, swapLeftBy)); // Output: [3, 4, 5, 6, 1, 2]


