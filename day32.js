function strongNumber() {
  let n = 40585,
    originalNumber = n
    sum = 0,
    rem = 0;
  while (n > 0) {
    rem = n % 10;
    let fact = 1
    for (let i = 1; i <= rem; i++) {
      fact = fact * i
    }
    sum += fact
    n = Math.trunc(n / 10);
  }
  return sum === originalNumber ? console.log(`${originalNumber} it's a starong Number `):console.log(`${originalNumber} it's not a starong Number`);
  
}
console.log(strongNumber());
