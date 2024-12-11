function duplicateElem(arr){    
    let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      if(!newArr.includes(arr[i])){
         newArr.push(arr[i])
      }
   }
   return newArr
}
console.log(duplicateElem([12,34,45,67,45,45,34,12,4,45,67,45,45,34,12]));
