// print prime numner 

function primeNumber(num){
  if (num < 1) {
    return (`${num} is not a prime numner`)
  }
  for (let i = 2; i < num; i++) {
    if (num%i === 0) {
        return (`${num} is not a prime numner`)
    }
  }
  return (`${num} is a prime numner`)
}
console.log(primeNumber(2));
console.log(primeNumber(12));
console.log(primeNumber(23));
