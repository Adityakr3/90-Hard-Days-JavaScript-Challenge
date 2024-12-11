function partta(num) {
  for (let i = 1; i <= num; i++) {
     let str = ' '
    for (let j = 1; j <= 5; j++) {
     str+= " *"
    }
    console.log(str);
  }

}
partta(5);

// * * * * *
//   * * *
//     *
//   * * *
// * * * * *
