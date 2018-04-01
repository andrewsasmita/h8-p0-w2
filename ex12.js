// Konversi Menit

var input = 75;

function konversiMenit(menit) {
    
    var jam = Math.floor(menit/60);
    var sisamenit = menit%60;
    return (jam+':'+sisamenit);
}

var answer = konversiMenit(input);
console.log(answer); 
 