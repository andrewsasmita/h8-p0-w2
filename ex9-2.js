// Tugas 3

var name = "Emon";
var age = 19;
var address = "Jln. Kenapa Begitu, Surabaya";
var hobby = "bengong";

function processSentence (a, b, c, d) {
    return 'Nama saya '+a+', umur saya '+b+' tahun, alamat saya di '+c+', dan saya punya hobby yaitu '+d+'!';
}

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);