// Angka Ganjil dan Genap

var num1=0
var num2=2
var num5=5
var num9=9

while (num1<100) {
    num1=num1+1
    if (num1%2==0) {
        console.log(num1+' Genap');
    }
    else {
        console.log(num1+' Ganjil')
    }
}

console.log(' ')

while (num2<100) {
    num2=num2+2
    if (num2%3==0) {
        console.log(num2+' kelipatan 3')
    }
    else {
        console.log(num2)
    }
}

console.log(' ')

while (num5<100) {
    num5=num5+5
    if (num5%6==0) {
        console.log(num5+' kelipatan 6')
    }
    else {
        console.log(num5)
    }
}

console.log(' ')

while (num9<100) {
    num9=num9+9
    if (num9%10==0) {
        console.log(num9+' kelipatan 10')
    }
    else {
        console.log(num9)
    }
}

