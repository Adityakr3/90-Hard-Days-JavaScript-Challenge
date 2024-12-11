function countStr(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    if (arr[i] == "") continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
        arr[j] = "";
      }
    }
    console.log(`${arr[i]} = ${count}`);
  }
}
countStr("Mat Bat Cat Mat Bat Cat");
