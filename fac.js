function fac(num){
    let n1= 0;
    let n2 = 1;
    let n3 = 0;
    console.log(n1)
    for (let i = 2; i < num; i++) {
        n3 = n1 + n2
        if(i%2==0){
            console.log(n3);
            
        }
        n1 = n2;
        n2 = n3        
    }
}
fac(10)