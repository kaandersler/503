/* 
String Metodlar 

a) length -> Bir string değerin karakter uzunluk sayısını verir.
          stringDegisken.length veya stringDeger.length
          Not: Boşluklar da dahildir.

b) [indisNo] -> String ifadenin herbir karakterinin sıra numarası diyebiliriz. Bir string ifadedeki belli bir karaktere ve belli bir karakter aralığına ulaşmak ve yönetmek için kullanabiliriz.

c) substring(x,y) -> Kısaltma veya belirli bir aralığı yazdırmak için kullanılır. x başlangıç indisNosu olup y bitiş indisnosu olacaktır.
substr(x,y) -> x başlangıç indisNosu olup y kaç karakter ileri gitmesi gerektiğini belirtir.

d) replace(a,b) -> a parametresi eski kelime, b parametresi yeni kelime şeklinde özetleyebiliriz. replace ile a ifadesini b olarak değiştirmiş oluyoruz.


*/

// let adSoyad = 'Mahmut Tuncer'
// console.log(adSoyad.length)

// function tvt(){
//     let tivit = prompt('Twitinizi Yazın')
//     // let uzunluk = tivit.length
//     if(tivit.length <= 140){
//         document.write(`${tivit} - Uz: ${tivit.length}`)
//     } else {
//         alert(`Uz: ${tivit.length} karkter yazdın. Biraz daha kısa olsun.`)
//     }
// }

// let sanatci = 'Ajdar'
/*
[0] -> A
[1] -> j
[2] -> d
[3] -> a
[4] -> r
*/
// console.log(sanatci[2])

// let kk = prompt('Kredi Kartı Numaranızı Girin')

// if(kk.length == 16){
//     console.log(`XXXX XXXX XXXX ${kk[12]}${kk[13]}${kk[14]}${kk[15]}`)
// } else {
//     alert('Kart Numarasını Hatalı Girdiniz.')
// }


let metin = 'Web site tasarımı ve SEO ilişkisini doğru bir şekilde oluşturmanız için dikkat etmeniz gereken en önemli nokta sitenin açık ve anlaşılır bir şekilde tasarlanmasıdır. Ana sayfada JavaScrip ile yer verilen metinler ve bilgiler; sitenin temel amacına uygun olmalı, detaylı bir biçimde alt sayfalara gönderilmelidir. Çok sayıda alt sayfanın ve JavaScrip oluşturulmasının SEO çalışmalarına zarar vereceğini de unutmamak gerekiyor. Bunun yanı sıra web sitesi URL yapısının kısa olması ve içerisinde özel karakterlerin yer almaması da arama motorları için önem arz ediyor.'

// document.write(metin.substring(0,164))

function kkarti(){
    let kredik= prompt('Kart No Giriniz?')
    console.log(`XXXX XXXX XXXX ${kredik.substring(12,16)}`)
    console.log(`XXXX XXXX XXXX ${kredik.substr(12,4)}`)
}


let yazi1 = metin.replace('JavaScrip','JavaScript') // İlk bulunan ifadeyi günceller
let yazi2 = metin.replaceAll('JavaScrip','JavaScript') // Belirtilen tüm ifadeleri günceller
console.log(yazi1)
console.log(yazi2)


let blog = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tenetur blanditiis eligendi tempora, cum laborum eaque debitis corporis accusamus quo molestiae. Voluptatibus placeat quam obcaecati perspiciatis in aperiam,Lorem velit facere libero veritatis iure provident corporis id Lorem consequatur similique consequuntur quae Lorem tempore tempora ea reprehenderit, delectus amet beatae! Delectus, eos laboriosam!'


let a = prompt('Hangi Kelimeyi Değiştirmek İstiyorsun'),
    b = prompt('Yeni Kelimeyi Girebilirsin')

confirm(`${a} kelimesini ${b} kelimesi olarak değiştiriyorum Onaylıyor musun?`)
let yeni = blog.replaceAll(a,b)
document.write(yeni)

let ok= confirm('Ok mi değil mi?')
console.log(ok)