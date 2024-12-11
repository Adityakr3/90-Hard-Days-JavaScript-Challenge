// function MergeSort(array){
     
//     let res = []
//      sort(array)
//      for (let i = 0; i < array.length; i++) {
//         res += array[i]+" "
//      }
//      return res

//      function sort(array){
//           if(array.length ==1) return;
//           let left = []
//           let right =[]

//           for (let i = 0; i < array.length/2; i++) {
//             left[i] = array[i];
//           }
//           for (let j = 0; j < array.length-left.length; j++) {
//             right[j] = array[j+left.length];
//           }
//           sort(left)
//           sort(right)
//           merge(left , right , array)
//     }
//      function merge(a,b,c){
//         let i = 0;
//         let j = 0;
//         let k = 0;
//         while(i < a.length && j<b.length){
//             if(a[i] < b[j]){
//                 c[k++] = a[i++]
//             }
//             else{
//                 c[k++] = b[j++]
//             }
//         }
//         while(i<a.length){
//             c[k++] = a[i++]
//         }
//         while(j<b.length){
//             c[k++] = b[j++]
//         }
//      }
// }
// console.log(MergeSort([9,7,8,1,2,6,3]));


// approach 2

let array = [9,7,8,1,2,6,3];
function MergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = MergeSort (arr.slice(0,mid));
  let right = MergeSort (arr.slice(mid))
  return merge(left,right )
}
function merge(left , right){
  let sortedArray = [];
  while(left.length && right.length){
     if(left[0] < right[0]){
        sortedArray.push(left.shift())
     }else{
        sortedArray.push(right.shift())
     }
  }
  return [...sortedArray , ...left , ...right]
}

console.log(MergeSort(array));

