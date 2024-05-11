/* 

Objects(Nesneler)

1- TÜM veri türlerini içinde barındırabilir.
2- key:value ikilisi şeklinde tanımlanır
3- Json ile farkı json'da key isimleri tırnak içinde yazılır
4- json sunucunda içinde ve .json dosyası ile ayrıca oluturulur objler ise direkt js dosyası içinde yazılır.
5- süslü paratnez ile data grubu oluşturulur.
6- Boş obje datası da oluşturulabilir. Ör: let uye = {}
7- key ismi ile value'ya ulaşılır.
*/

let uye = {
    isim: 'Hayko',
    soyad: 'Cepkin',
    dogum: 1970,
    meslek: 'Sanatçı',
    sarkilar: [
        'Yol Gözümü Dağlıyor',
        'Bertaraf Et',
        'Kabul',
        'Sandık',
        'Geç Kaldım'
    ],
    aile:[
        {
            anne:'Sevo',
            yas:85
        },
        {
            baba:'Yıldo',
            yas:86
        },
        {
            kardes:'Hayki',
            yas:52
        }
    ],
    kadi:'hayko',
    sifre:123
}

console.log(uye) //Tüm veriyi ekrana yazar

console.log(uye.isim)
console.log(uye.soyad)
console.log(uye.aile[2].kardes)

// Sevo'dan doğma, Yıldo'dan doğma 54 yaşındaki Hayko Cepkin'in Sandık isimli şarkısının söz yazarı 52 yaşındaki kardeşi Hayki Cepkin'dir.

document.write(`${uye.aile[0].anne}'dan doğma, ${uye.aile[1].baba}'dan olma ${2024-uye.dogum} yaşındaki ${uye.isim} ${uye.soyad}'in ${uye.sarkilar[3]} isimli şarkısının söz yazarı ${uye.aile[2].yas} yaşındaki kardeşi ${uye.aile[2].kardes} ${uye.soyad}'dir.`)


function login(){
    let user = prompt('Kullanıcı Adınız'),
        pass = Number(prompt('Şifreniz'))

    if(user === uye.kadi && pass === uye.sifre){
        alert(`${uye.isim} ${uye.soyad} Admin Hoşgeldin`)
    } else {
        alert('Kullanıcı Adı ve/veya şifreniz hatalı')
    }
}

/* Object Methods */
// Object.keys(obejeninAdi) -> Nesne data içindeki key'leri yakalar.

console.log(Object.keys(uye)) //Tüm keyleri array type'ında yazar
let keyler = Object.keys(uye) // Tüm keyler array olarak değişkene atandı
console.log(typeof(keyler)) // Değişkenin data türü array olarak görünür
console.log(keyler[3]) // Ekrana meslek ifadesini yazar
console.log(Object.keys(uye)[3]) // Ekrana meslek ifadesini yazar

// Object.values(obejeninAdi) -> Nesne data içindeki value'lari yakalar.
console.log(Object.values(uye)) //Ekrana tüm valuları yazdırır
let info = Object.values(uye) //Tüm value'lar array olarak değişkene atandı



/* 
Json ve Metotları 

JavaScript Object Notation olarak geçmektedir.
Diğer yazılım dilleriyle yaygın olarak kullanılan ortak bir dosya ve data biçimidir. Veri depolamak amaçlı kullanılır. Tüm veri türlerini çinde barındırabilir.

Not: Objelere göre farkı key'ler turnak içinde yazılmalı ve kendine ait json uzantılı bir dosyada yazılmalıdır.

fetch('veri.json')
    .then(response => response.json())
    .then(degiskenAdi => {
        Çalışması istenilen kodlar burada yazılacak
    } )

*/

fetch('veri.json')
    .then(response => response.json())
    .then(degiskenAdi => {
        console.log(degiskenAdi)
        console.log(`${degiskenAdi.admin[0].name}'nın kullanıcı ${degiskenAdi.admin[0].kadi}'dur.`)
    } )






