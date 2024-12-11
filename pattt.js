// 1 2 3 4 5
//   1 2 3 4
//     1 2 3 
//       1 2 
//         1


function printPattern(num){
  for (let i = 0; i < num; i++) {
    for (let j = 1; j <= i-1 ; j++) {
        console.log(''); 
    }
    for (let j = 0; j <= 5-i; j++) {
        console.log(j)
    }
  }
}
printPattern(5)
