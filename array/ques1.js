// write a program to check the given string anagram or not


// Approach1
function IsAnagram(str1 , str2){
   let s1 = str1.split('').sort().join('')
   let s2 = str2.split('').sort().join('')
   if (s1 !== s2) {
    console.log("it's not a aragram");
   }else{
    console.log("it's  a aragram");
   }
}
IsAnagram('aditya','dityaa')


//approach2

function IsAnagram(s1,s2){
    if(s1.lenght != s2.lenght){
        return false
    }
    while(true){
        if(s1.lenght == 0 && s2.lenght == 0){
            return true
        }
        else if(s1.lenght == 0 || s2.lenght == 0){
            return false
        }
        let ch = s1.charAt(0);
        s1 = s1.replace(ch,"");
        s2 = s2.replace(ch,"");
    }
}
IsAnagram('aditya','dityaa')