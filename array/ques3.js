// "aditya@12324343java6script" find sum of digit. 1+2+3+2+4+3+4+3


function sumOfDigit(str){
    let sum = 0
    for (let i = 0; i < str.length; i++) {
       if(Number(str[i])) sum+=Number(str[i]) 
    }
    return sum
}
console.log(sumOfDigit("aditya@12324343java6script"));


// "aditya@13java16script4". find sum. of number. 13+16+4
//doute


// javascript is very easy
// tpircsavaj si  yrev ysae

function rev(str){
  let s1 = str.split(" ")
  let str1 = " "
   for (let i = 0; i < s1.length; i++) {
      str1 +=(s1[i].split('').reverse().join(''))+" ";
   }
   return str1
}
console.log(rev('javascript is very easy'));



// Banglore is coolest city
// Banglore Is Coolest City





// yahweh. react.js. 