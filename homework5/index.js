  
const findLongestWord = function (string) {
    let stringg = string.split(' ');
    let long = '';
    
    for (word of stringg) {
    if (long.length < word.length){
        longest = word;
    }
    }
    return longest;
  };

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
console.log(findLongestWord('Google do a roll')); // 'Google'
  
console.log(findLongestWord('May the force be with you')); // 'force'
  

  