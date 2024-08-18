//Create a function to remove dublicate elements
// const arr = [1,1,1,2,2,3,4,5,6,6,5]
// function removeDublicates(arr) -> return an array of unique elements - [1,2,3,4,5,6]

const arr = [1,1,1,2,2,3,4,5,6,6,5]
function removeDublicates(arr){
    let newArr = [];
  for (let i = 0; i < arr.length; i++) {
       if(newArr.indexOf(arr[i]) === -1 ){
         newArr.push(arr[i]);
       }
  }
  return newArr
}
console.log(removeDublicates(arr));
