

function sumOfDigitsUntilSingle(num) {
    let sum = num;
    while (sum > 10) {

      let tempSum = 0;
      
      while (sum > 0) {
        tempSum += sum % 10;
        sum = Math.floor(sum / 10);
      }
      sum = tempSum;
    }
    return sum;
  }
  











  function NewArrayOfSum (array){
    let newArray = []
     for (let i = 0; i < array.length; i++) {
       if(sumOfDigitsUntilSingle(array[i] > 9)){
            newArray.push(sumOfDigitsUntilSingle(array[i]))
       } 
     }
     return newArray
  }
console.log(NewArrayOfSum([99,9992,94694,12]));

  