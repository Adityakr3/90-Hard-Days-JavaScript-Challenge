//   - 1
//   - - 2 1
//   - - - 3 2 1
//   - - - - 4 3 2 1
//   - - - - - 5 4 3 2 1

// function printPattern(num){
//    for(let i=0; i<=num; i++){
//      let str = " ";
//        for(let j=i; j>=1; j--){
//            str+="-"+" "
//        }
//        for(let j=i; j>=1; j--){
//          str += j+" "
//        }
//        console.log(str);
//    }
// }
// printPattern(5)

// 1
// 1 2 *
// 1 2 3 * *
// 1 2 3 4 * * *
// 1 2 3 * *
// 1 2 *
// 1

function printPattern(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      str += j + " ";
    }
    for (let j = 1; j < i; j++) {
      str += "*" + " ";
    }
    str += "\n";
  }
  for (let i = 3; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        str+=j+" "
    }
    for(let j = i; j >= 1; j--){
        str += "*"+" "
    }
    str +='\n'
  }
  console.log(str);
  
}
printPattern(5);
