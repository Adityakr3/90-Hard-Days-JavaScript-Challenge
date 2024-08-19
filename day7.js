// Move all negative numbers to beginning.
// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

const Number = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
function Arrange_Number(arr){
    let Negative_Number = [];
    let postive_Number =[];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            postive_Number.push(arr[i])
        }
        else{
            Negative_Number.push(arr[i])
        }
    }
    return [...Negative_Number,...postive_Number]
}
console.log(Arrange_Number(Number));
