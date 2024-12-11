function findGreatestElem(arr) {
  let greatestElem = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > greatestElem) {
      greatestElem = arr[i];
    }
  }
  return greatestElem;
}

console.log(findGreatestElem([2, 23, 43, 8, 93, 34, 1])); // 93