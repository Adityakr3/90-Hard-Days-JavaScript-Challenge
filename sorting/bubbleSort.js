function BubbleSort(arr) {    
  for (let i = 0; i < arr.length; i++) {    
    for (let j = 0; j < arr.length - i; j++) {       
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
}
console.log(BubbleSort([1, 2, 9, 7, 5, 8]));

