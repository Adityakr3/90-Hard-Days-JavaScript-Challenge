//Reverse an array. [1,2,3,4,5,6] -> [6,5,4,3,2,1] (do not use built-in method)
let arr = [1,2,3,4,5,6];
function Reverse_Array(arr){
   let revArr = [];
   for(i = arr.length; i > 0 ; i-- ){
       revArr.push(arr[i-1]);
   }
   return revArr;
}
console.log(Reverse_Array(arr));
