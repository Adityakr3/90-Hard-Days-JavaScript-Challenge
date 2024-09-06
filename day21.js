//To print a square of stars (*) in JavaScript, where the size of the square is determined by an input n, you can use nested loops. Each row will contain n stars, and there will be n rows.

function squareprint(num) {
  for (let i = 0; i < num; i++) {
    let row = ''
    for (let j = 0; j < num; j++) {
       row += '  *'
    }
    console.log(row);
  }
}
squareprint(5)