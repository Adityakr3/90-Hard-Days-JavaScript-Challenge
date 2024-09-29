// print alternate prime number in a range

function isPrimeNumber(num){
    if(num <= 1) return false
    for (let i = 2; i <= Math.trunc(num/2); i++) {
      if(num%i==0){
        return false
      }
    }
    return true
}

function PrintAlternatePrimeNumber(start,end){
    let count = 0; let sum = 0
    for (let i = start; i <= end; i++) {
       if(isPrimeNumber(i)){
          count++
          if(count%2 !== 0){
            sum+=i
          }
       }
    }
    return sum
}
console.log(PrintAlternatePrimeNumber(25,75));
