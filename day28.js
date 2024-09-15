// print prime numner 

function primeNumber(num){
    if(num < 1){
        return console.log(`it's prime number ${num}`);
    }
    for (let i = 2; i < num; i++) {
        if (num%i===0) {
            return (`it's not prime number ${num}`); 
        }
    }
    return(`it's prime number ${num}`);
}
console.log(primeNumber(2));
console.log(primeNumber(12));
console.log(primeNumber(23));
