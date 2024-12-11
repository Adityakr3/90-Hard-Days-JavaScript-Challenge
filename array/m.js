function missingNumber(arr){
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      let next = arr[i+1];
      for (let j = current+1; j < next; j++) {
         newArr.push(j)
      }
   }
   return newArr
}
console.log(missingNumber([1,19,27]));
