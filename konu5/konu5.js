/* 
Functions (Fonksiyonlar)

- belirli bir görevi yerine getirmek için tasarlanmış, yeniden düzenlenebilir bir programlama ifadesidir.
-function anahtar kelimesi ve parametre parantezleri ile tanımlanırlar.
- parantezleri içine sınırsız satıda parametre gönderilebilir. ve bu parametrelere globalde argüman tanımlanabilir.
- çalıştırabilmek için o fonksiyonun adı yazılmalıdır.
- fonksiyonlar geriye değer döndürür. (Return)


function info(){
    Yapılması istenilen işlemler burada kodlanacak
    Not:Burada tanımanan değişken localscope'tur.
}

*/

function info() {
    console.log('Başvurunuz Alınmıştır.')
}

info() //Eğer fonksiyon çağırılmazsa ilgili algoritma değer döndürmeyecektir.

let mesaj = 'Başvurunuz Kabul Edildi'

function msj() {
    let mesaj = 'Başvurunuz Onaylandı' //Local Scope
    //console.log(mesaj)
    alert(mesaj) //Local scope değeri ekrana yazar
}

console.log(mesaj) //Global scope değeri ekrana yazar



let isim = 'Kaan' //Global Scope
function kimlik() {
    console.log(isim)
}

kimlik()

//Ör: Kullanıcı Girişi
function login() {
    let kadi = prompt('Kullanıcı Adınızı Girin'),
        sifre = prompt('Şifrenizi Girin')

    if (kadi == 'Admin' && sifre == '123') {
        alert(`${kadi} Yönetim Paneline Hoşgeldin`)
    } else {
        alert('Kullanıcı Bulunamadı')
    }
}

/* Return İşlemi */
function soyisim() {
    let soyad = 'Pamukcu'
    return soyad
}

console.log(soyisim())
alert(soyisim()) //Ekrana 'Pamukcu' yazar


/* 
Parametre ve Argüman kullanımı 

function fonksiyonAdi(parametre1, parametre2, ......){
    return var veya yok fark etmez
    yaptırılacak işlemler
}

console.log(fonksiyonAdi(argüman1,argüman2,.....))

*/

function toplama(s1, s2) {
    let ts = s1 + s2
    return ts
}

console.log(toplama(10, 20))

/* 

Ör: Öğrenci sınav ortalaması

Öğrenci adı
v1,v2,F -> (v1*0,20) + (v2*0,40) + (f*0,40)
50'nin altındaysa "kaldın. bütünlemeye gidiyorsun"
50'nin üstündeyse "Tebrikler mezun oldun"

NOT: Return ile yapılsın

*/

function notYaz(){
    let n1 = prompt('Vize 1 Puanını Girin'),
        n2 = prompt('Vize 2 Puanını Girin'),
        n3 = prompt('Vize 3 Puanını Girin')
    
        function not(v1, v2, f) {
            let ort = (v1 * 0.20) + (v2 * 0.40) + (f * 0.40)
        
            if (ort >= 50) {
                alert(`Öğrencinin not ortaması ${ort} - Geçti`)
            } else {
                alert(`Öğrencinin not ortaması ${ort} - Kaldı`)
            }
            // return ort
        }       
        
        not(n1,n2,n3)
}


// function not(v1, v2, f) {
//     let ort = (v1 * 0.20) + (v2 * 0.40) + (f * 0.40)

//     if (ort >= 50) {
//         alert(`Öğrencinin not ortaması ${ort} - Geçti`)
//     } else {
//         alert(`Öğrencinin not ortaması ${ort} - Kaldı`)
//     }
//     // return ort
// }


// not(50,60,70)

/* 
Anonim Fonksiyonlar

let degiskenAdi = function(para1){
    Return'lü veya returnsüz çalışacak kodlar
}

degiskenAdi(Arg1)


Arrow Functions

let degiskenAdi = (para1) => {
    Return'lü veya returnsüz çalışacak kodlar
}

degiskenAdi(Arg1)



*/

/* 

Ödev
Ehliyet Yaş Hesaplama Uygulaması

- Doğum yılı alınacak
- buton tıklantığında çalışacak
- Returnsüz hazılanacak

*/