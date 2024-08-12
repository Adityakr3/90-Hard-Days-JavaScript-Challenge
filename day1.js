// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function Is_A_Palindrome(str){
   let rev = "";
   for(i = str.length-1; i >= 0; i--){
     rev+=str[i]
   }
   for (let j = 0; j < str.length; j++) {
    if(str[j] !== rev[j]){
        return false;
    }
   }
   return true
}
console.log(Is_A_Palindrome("adiqda"));
