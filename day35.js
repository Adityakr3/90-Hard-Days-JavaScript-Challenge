// Print Last three prime number in given range ?


function isPrimeNumber(num){
   if(num <= 1) return false;
   for(let i = 2; i <= Math.trunc(num/2); i++){
     if(num%i == 0){
        return false;
     }
   }
   return true;
}

let start = 23 , end = 99
function printLastThreePrimeNumber(start, end){
    let count = 0;
    for (let i = 99; i >= 23; i--) {
       if(isPrimeNumber(i)){
         console.log(i)
         count++;
        if(count === 3) break
       }
    }
}
printLastThreePrimeNumber(start , end)