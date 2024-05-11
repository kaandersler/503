/* 
DOM (Document Object Management)
Html elementlerine JS ile ulaşma, üzerinde çalışma şeklinde kısaca özetlenebilir.

https://api.whatsapp.com/send?phone=905555555555&text=Merhaba

innerText -> İlgili elementin içindeki metinsel ifadeyi değiştirmeyi sağlar.
innerHTML -> İlgili elementin içindeki ifadeyi yeni bir html etiketi ile değiştirmeyi sağlar.
textContent > İlgili elementin içindeki metinsel ifadeyi değiştirmeyi sağlar.

1- document.getElementById('idAdi') -> id bilgisine göre elemente ulaşır.
2- document.getElementsByClassName('classAdi') -> class bilgisine göre elementlere ulaşır.
3- document.getElementsByTagName('etiketAdi') -> Html etiket bilgisine göre elementlere ulaşır.
4-  document.querySelector('#idAdi')
    document.querySelector('.classAdi')
    document.querySelector('etiketAdi')
    Ör: document.querySelector('#hizmetlerimiz > div > div:nth-child(5) > div > div.health-pad-left.res-time-table > div > h3 > a')

*/

let adres = document.URL //İlgili sayfanın url adresini yakalar
console.log(adres)
let wpAdres1 = `https://api.whatsapp.com/send?phone=905555555555&text=${adres}`
console.log(wpAdres1)

let sekme = document.title //Sayfanın title etiketi içindeki ifadeyi yakaladı.
console.log(sekme)
let wpAdres2 = `https://api.whatsapp.com/send?phone=905555555555&text=${sekme}`
console.log(wpAdres2)


let head = document.head //İlgili dokümandaki head etiketlerini ve içindeki kodları yakalar.
console.log(head)

let anaBaslik = document.getElementById('h1Baslik')
console.log(anaBaslik.innerText) // Ekrana 'Bu Başlık Html ile Yazıldı' yazacaktır.

let dugme = document.getElementsByClassName('btn')
console.log(dugme)
dugme[1].innerText = '2.Buton'
// dugme[2].innerText = 'Kapalı'

function onof(){
    dugme[2].innerText = 'Kapalı'
}

let user = document.getElementById('kadi')
let pass = document.getElementById('sifre')

function login(){
    if(user.value == 'Admin' && pass.value == '123'){
        alert(`Sevgili ${user.value}, admin paneline hoş geldin`)
    } else {
        alert('Hatalı Giriş')
    }
}


/* 

Ödev

1- Json dosyasında bir üye olacak (Kadi, şifresi, telefonu, adresi, mail adresi , ilgi alanları, foto, adı, soyadı)
2- inputtan kullanıcı adı ve şifresini girecek eğer doğruysa jsondaki bilgileri html'de görünecek
Ör:
    Adı: js ile json'dan çekip gelsin
    Soyadı: js ile json'dan çekip gelsin
*/

