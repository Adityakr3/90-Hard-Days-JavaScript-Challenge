//.       1
//.     2 1 2
//    3 2 1 2 3
//. 4 3 2 1 2 3 4
//5 4 3 2 1 2 3 4 5

function patprint(num) {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= num - i; j++) {
      str += "  ";
    }
    for (let j = i; j >= 1; j--) {
      str += " " + j;
    }
    for (let j = 2; j < i + 1; j++) {
      str += " " + j;
    }

    console.log(str);
  }
}
patprint(9);
