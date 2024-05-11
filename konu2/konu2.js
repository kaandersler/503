/* 

Değişkenler

1- Bir değişkenin içine tüm data türleri veri olarak atanabilir.
2- Verilerin kapsayıcısı denilebilir.
3- var, let, const anahtar kelimeleri ile oluşturulurlar. Not: artık var kullanımı tercih edilmiyor. var, let, const anahtar kelimeleri değişken adından önce yazılmalıdır.
    var -> değeri değiştirilebilir ve tekrardan o değişken oluşturulabilir. (Kullanma)
    let -> değeri değiştirilebilir ve tekrardan oluşturulamaz.
    const -> değeri değiştirilemez ve tekrardan oluşturulamaz.

4- Sayı ile başlayamazlar.
5- $ ve _ simgeleri haricinde diğer simgesel karakterileri içeremezler
6- Değişkenlere tüm data türleri atanabilir.
7- Atama işlemi için = kullanılır.

Ör: let adiSoyadi = 'Hayko Cepkin'

Not: document.write(Parametre) -> işlem sonucunu html'de ekrana yazar.
*/

let adiniz = 'Hayko'
let soyadiniz = 'Cepkin'
let yas = 50
let ulke = 'Türkiye'

console.log(adiniz)

/* Birleştirme operatörleri */
//1. Yöntem
console.log(adiniz,soyadiniz) //Ekrana Hayko Cepkin yazar
document.write(adiniz,soyadiniz) //Ekrana HaykoCepkin yazar

//2. Yöntem (+ ile birleştirme)
document.write(adiniz +' '+soyadiniz) //Ekrana Hayko Cepkin Yazar
console.log('Rock Sanatçısı '+adiniz+' '+soyadiniz+"'in yaşı "+yas+"'dir.")

//3. Yöntem (Backtick ile birleştirme (``))
console.log(`Rock Sanatçısı ${adiniz} ${soyadiniz}'in yaşı ${yas}'dir.`)

let meslek = 'Sanatçı',
    album1 = 'Fırtınam',
    album2 = 'Tanışma Bitti'

document.write(`<br>Rock Sanatçısı ${adiniz} ${soyadiniz}'in birinci albümünün adı ${album1}'dır. Daha sonra ikinci albümü olan ${album2}'yi piyasaya çıkardı`)
