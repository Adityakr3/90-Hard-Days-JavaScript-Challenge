// fibonacci series alternate 
// 0 , 1, 1, 2 , 3 , 5, 8, 13, 21, 34, 55, 89

function fibonacciSeries() {
    let num = 10; 
    let a = 0, b = 1, c;
    
    for (let i = 1; i <= num; i++) {
       if (i % 2 !== 0) { 
          console.log(a);
       } 
       c = a + b;
       a = b;
       b = c;
    }
 }
 
 fibonacciSeries();
 