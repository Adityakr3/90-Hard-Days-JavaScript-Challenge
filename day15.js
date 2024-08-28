// function that generates the next five characters in sequence, starting from 
// the given character if you enter Z then answer is abcde if you enter X. Then 
// answer is YZabc

function nextFiveChars(char) {
    const result = [];
    let startChar = char.charCodeAt(0);      
    for (let i = 0; i < 5; i++) {
        startChar++;
        if (startChar === 91) { 
            startChar = 97; 
        }
        else if (startChar > 127 && startChar < 97 ){
            startChar = 65; 
        }
        result.push(String.fromCharCode(startChar)); 
    }
    return result.join('');
}
console.log(nextFiveChars('X')); 

