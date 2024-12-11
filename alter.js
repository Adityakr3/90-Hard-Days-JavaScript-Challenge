function rangePrimeNumber(start , end){
    let count = 0
    for (let i = end; i >= start; i--) {
       if(IsprimeNumber(i)){
          if(count == 2){
            console.log(i)
          }
          count++
       }
    }
}

function IsprimeNumber(num){
    if(num <= 1){
        return false;
    }
    for(let i = 2; i < Math.trunc(num/2); i++ ){
       if(num % i == 0) return false;
    }
    return true;
}
rangePrimeNumber(12,45)