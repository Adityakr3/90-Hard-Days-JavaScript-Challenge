function star(num){
    for (let i = 1; i <= num; i++) {
        let str = ''
        for (let j = 0; j <= num-i ; j++) {
           str+=' '
        }
        for (let j = 0; j < (2*i)-1; j++) {
            str+="*"
        }
        console.log(str);
    }
}
star(5)
