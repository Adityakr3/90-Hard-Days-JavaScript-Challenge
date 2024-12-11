function InserctionSort(array){
    for (let i = 1; i < array.length; i++) {
        let key = array[i]
        let j = i -1;
        while(j >= 0 && array[j] > key ){
            array[j+1] = array[j]
            j--
        }
        array[j+1] = key
    }
    return array
}
console.log(InserctionSort([2,23,43,8,93,34,1]));
