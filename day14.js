// Write a function to find the length of a string

let str = 'Hello World'
function findStringLength(str){
 let count= 0;
 while(str[count] !== undefined){
    count++
 }
 return count
}
console.log(findStringLength(str));
