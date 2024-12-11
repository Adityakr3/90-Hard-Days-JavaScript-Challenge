//.       1
//.     1 2 1
//    1 2 3 2 1
//  1 2 3 4 3 2 1
//1 2 3 4 5 4 3 2 1


function patprint(num){
   for (let i = 1; i <= num; i++) {
      let k = i;
     let str = "" 
     for (let j = 1; j <= num -i; j++) {
        str += "  "
     } 
     for (let j = 1; j <= 2*i-1; j++) {
       if(j <= i){
          str += " "+j
       }
       else{
           str+=" "+(--k)
       }
     }     
     console.log(str);
   }
}
patprint(5)