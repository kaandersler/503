/* 

Koşullu İfadeler (if else if else, switch Case)

Karşılaştırma Operatörleri
a) ==   -> Eşittir anlamına gelir. Ör: x == y Bu sadece karakterlerin aynı olup olmadığını kontrol eder.
b) ===  -> Denklik anlamına gelir. Ör: 5 === '5' bu ise karakterler ve data türlerini kontrol eder.
c) !=   -> Eşit değildir anlamına gelir.
d) !==   -> Denk değildir anlamına gelir.
e) >    -> Büyükse anlamına gelir
f) <    -> Küçükse anlamına gelir
g) >=   -> Büyük veya eşitse anlamına gelir
h) <=   -> Küçük veya eşitse anlamına gelir

Mantıksal Operatörler(Logical Operators)
1) $$ -> ve anlamına gelir
2) || -> veya anlamına gelir

*/

console.log(5 === '5')  //False döner
console.log(5 == '5')   //True döner
console.log(5 != 5)     //False döner
console.log(5 != '5')   //False döner
console.log(5 !== '5')  //True döner

if(5 > 3){
    alert(`5, 3'ten büyüktür.`)
} else {
    alert('Sonuç Hatalı')
}

let gizli = 8
let tahmin = Number(prompt('Sayıyı Tahmin Et')) //Number(), prompt ile girilen ifadeyi integer'a dönüştürür. Ancak sayı girişleri için geçerlidir.

if(tahmin === gizli){
    alert('Tahminin Doğru')
} else {
    alert('Yaklaştın')
}


let kadi = prompt('Kullanıcı Adınızı Girin'),
    sifre = prompt('Şifrenizi Girin')

if(kadi === 'Admin' && sifre === '123'){
    document.write(`Sevgili ${kadi}, yönetici paneline hoşgeldin.`)
}else if(kadi == 'Admin2' && sifre =='456'){
    document.write(`Sevgili ${kadi}, yönetici paneline hoşgeldin.`)
} else{
    document.write('Hadi Başka Kapıya')
}

/* Switch - Case ile koşullu ifadeler */

let hDurumu = prompt('Hava Durmunu Girin. (Y - G - B)')

switch(hDurumu){
    case 'Y':
        alert('Bugün Hava Yağmurlu')
        break
    case 'G':
        alert('Bugün Hava Güneşli')
        break
    case 'B':
        alert('Bugün Hava Bulutlu')
        break
    default :
        alert('Hava Durumu Belirsiz')
        break
}

//Ör: Kullanıcıdan doğum yılını ilgili metot ile alın. Eğer yaşı 18'e eşit veya büyükse "xx yaşındasınız ehliyet alabilirsiniz" eğer yaşı 18'den küçükse "yy yaşındasınız Ehliyet alabilmek için zz yıl beklemelisiniz" şeklinde uyarı çıksın.

let dy = prompt('Doğum Yılınızı Girin'),
    yas = 2024 - dy

if(yas >= 18){
    alert(`${yas} yaşındasınız ehliyet alabilirsiniz`)
} else {
    alert(`${yas} yaşındasınız ehliyet alabilmek için ${18 - yas} yıl beklemelisiniz`)
}