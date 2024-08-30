// write a function that take a array of number and return 
// a new array even number and a new array odd number 


let arr=[12,65,78,32,48,19,85,37,98,14,35];
function evenNumber(arr){
 let even =[];
 let odd =[];
 for (let i = 0; i < arr.length; i++) {
   if(arr[i]%2===0){
    even.push(arr[i]);
   }
   else{
    odd.push(arr[i]);
   }
 }
 return [even,odd];
}
console.log(evenNumber(arr));
