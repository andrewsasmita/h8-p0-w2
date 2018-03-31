// Tanggal, Bulan, Tahun

var date = 19
// masukan nilai antara 1 - 31
var month = 9
// masukan nilai antara 1 - 12
var year = 1956
// masukan nilai antara 1900 - 2200 
var monthname

switch (month) {
    case 1: {monthname='Januari'; break;}
    case 2: {monthname='Februari'; break;}
    case 3: {monthname='Maret'; break;}
    case 4: {monthname='April'; break;}
    case 5: {monthname='Mei'; break;}
    case 6: {monthname='Juni'; break;}
    case 7: {monthname='Juli'; break;}
    case 8: {monthname='Agustus'; break;}
    case 9: {monthname='September'; break;}
    case 10: {monthname='Oktober'; break;}
    case 11: {monthname='November'; break;}
    case 12: {monthname='Desember'; break;} 
    default : {console.log('assign nilai variabel bulan disini! (dengan angka antara 1 - 12)');}
}

if (date<1||date>31) {
    console.log('assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)');
} else if (month<1||month>12) {
    console.log('assign nilai variabel bulan disini! (dengan angka antara 1 - 12)');
} else if (year<1900||year>2200) {
    console.log('assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)');
}
else {
console.log(date+' '+monthname+' '+year);
}