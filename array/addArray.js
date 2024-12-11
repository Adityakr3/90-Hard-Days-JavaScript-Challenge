let arr = [1, 2, 4, 6, 7];
let arr2 = [5, 7, 9, 2, 4,5,7,8];

function AddtwoArray(arr, arr2) {
  let newARR = []
  let i = 0 , j = 0 , k = 0
  while(i < arr.length && j < arr2.length){
     newARR[k++] = arr[i++]+arr2[j++]
  }
  while(i<arr.length){
    newARR[k++] = arr[i++]
  }
  while(j<arr2.length){
    newARR[k++] = arr2[j++]
  }
console.log(newARR);

}
console.log(AddtwoArray(arr, arr2));
