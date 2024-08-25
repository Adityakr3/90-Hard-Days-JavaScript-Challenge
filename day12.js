// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false



let  word = "UmA";
function detectCapitalUse(word){
  if( word === word.toUpperCase() || word === word.toLowerCase()){
    return true
  }
  else if(word[0]=== word[0].toUpperCase && word(1).slice === word(1).slice.toLowerCase()){
    return true
  }
  return false
}
console.log(detectCapitalUse(word));








