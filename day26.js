// print X in Pattern 

function printX(num) {
    for (let i = 0; i < num; i++) {
        let row = ''
        for (let j = 0; j < num; j++) {
            if(i === j || j === (num - 1 -i)){
                row += '*' 
            }else{
                row += ' '
            }
        }
        console.log(row);
        
    }

}
printX(6)