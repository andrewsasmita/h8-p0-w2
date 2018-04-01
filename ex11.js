// Balik Kata

var input='Halo selamat siang'

function rev(word) {
    var split=word.split("");
    var reversearray=split.reverse();
    var join=reversearray.join("");
    return join;
  }
  
var answer=rev(input);
console.log(answer);
