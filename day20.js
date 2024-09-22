function isArmstrongNumber(num){
   let numstr = num.toString();   
   let numlen = numstr.length;
   let sum = 0; 
   for (let i = 0; i < numlen; i++) {
      sum += Math.pow(parseInt(numstr[i]) , numlen)
   }
      return sum == num 
}
let num = 92727
isArmstrongNumber(num) ? console.log(`${num} is Armstrong Number` ) : console.log(`${num} is not Armstrong Number` )

   