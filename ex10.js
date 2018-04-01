// Bandingkan Angka

var num1 = 12;
var num2 = 8;

function bandingkanAngka(a, b) {
    
    if (a>b) {
        return 'false';
    } else if (a<b) {
        return 'true';
    } else if (a=b) {
        return '-1';
    } else {
        return 'Masukan angka pada variabel di atas !!!' ;
    }
}

var answer = bandingkanAngka(num1, num2);
console.log(answer); 
 