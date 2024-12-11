function selectionSort(array){
   for (let i = 0; i < array.length; i++) {
    let index = i
    for (let j = i+1; j < array.length; j++) {
       if(array[index] > array[j]){
          index = j
       }
    }
    if(i!=index){
        let temp = array[i]
        array[i] = array[index]
        array[index] = temp
    }
   }
   return array
}
console.log(selectionSort([85,76,89,2,56,81]));
