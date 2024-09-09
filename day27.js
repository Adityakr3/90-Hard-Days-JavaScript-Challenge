// print reverseAngleTriangle
function reverseAngleTriangle(num) {
    for (let i = 0; i < num; i++) {
        let row ='';
        for (let j = num; j >= i ; j--) {
            row += ' '
        }
        for (let j = 0; j < i+1; j++) {
           row += ' *'
            
        }
        console.log(row);
        
    }
}
reverseAngleTriangle(5)