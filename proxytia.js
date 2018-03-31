// Proxytia

var charname = 'emon'
var charclass = 'Ksatria'
var opening 
opening = 'Selamat datang di Dunia Proxytia, '

if (charname==='') {
    console.log('Nama harus diisi !');
} else if (charclass=='Ksatria') {
    console.log(opening+charname);
    console.log('Halo Ksatria '+charname+', kamu dapat menyerang dengan senjatamu!');
} else if (charclass=='Tabib') {
    console.log(opening+charname);
    console.log('Halo Tabib '+charname+', kamu akan membantu temanmu yang terluka.');
} else if (charclass=='Penyihir') {
    console.log(opening+charname);
    console.log('Halo Penyihir '+charname+', ciptakan keajaiban yang membantu kemenanganmu!');
} 
else {
    console.log('Halo '+charname+', Pilih peranmu untuk memulai game!');
}

