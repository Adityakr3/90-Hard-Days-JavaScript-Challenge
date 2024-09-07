//  print printNumberTriangle

function printNumberTriangle(rows) {
 let num = 1
 for (let i = 0; i <= rows; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += ' '+num
      num++
    }
    console.log(row);
    
 }
}
printNumberTriangle(5)