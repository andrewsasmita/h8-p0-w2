// X dan O

var input='xooxooxxx'

var counter1=0
var counter2=0

function xo(str) {
    
    for(var a=0; a<str.length; a++) {
      if (str[a] == 'x') {
        counter1=counter1+1
      }
      if (str[a]=='o') {
        counter2=counter2+1
      }    
    }
    if(counter1===counter2){
      return true
    }
    else {
      return false
    }
}

console.log(xo(input));

