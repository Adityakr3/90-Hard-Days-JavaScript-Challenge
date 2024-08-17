// Find the factorial of a number
// function findFactorial(num) - this function will return factorial of a number
// const num = 5;
// output - 120


function findFactorial(num){
   let factorial="1";
   for (let i = 1; i <= num; i++) {
       factorial *= i
   }
   return factorial
}
console.log(findFactorial(5));
