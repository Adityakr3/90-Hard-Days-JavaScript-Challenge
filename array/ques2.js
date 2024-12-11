// write a program replace a char without using replace method in js


function replaceStr(str){
    let temp=''
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i)
      if(ch == 'o'){
        temp+='@'
      }else{
        temp+=ch
      }
    }
    console.log(temp);
    
}
replaceStr('good')