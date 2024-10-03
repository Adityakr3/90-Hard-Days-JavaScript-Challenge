function isPrimeNumber(num){
    if(num <= 1) return false;
    for(let i = 2; i <= Math.trunc(num/2); i++){
      if(num%i == 0){
         return false;
      }
    }
    return true;
 }
 
 function countHowManyNumbersToAddUntilPrime(num){
    let count = 0
     for (let i = 1; i <= i+1; i++) {
        if(isPrimeNumber(i)){
           if( i > num){
             count = i - num
             return count
           }
        }
     }
 }
console.log(countHowManyNumbersToAddUntilPrime(21));

 
 
 