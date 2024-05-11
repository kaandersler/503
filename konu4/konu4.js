/* 

Döngüler (For / While / For of(Diziler için) / For in (Json Data için))

Tekrarlanması istenilen işlemler için kullanılır. Algoritmik olarak ya belirlenen hedef kadar işlem tekrarlanır ya da bir koşul verilir ve gerçekleşene kadar tekrarlanır.

for(Başlangıç; Bitiş Değeri; Tekrarın Yönü){
    Döngü tamamlanana kadar çalışması istenilen kodlar
}

*/

// for(let i=0; i<=10; i++){
//     document.write(i)
// }

// for(let i=0; i<5; i++){
//     document.write('Hakan')
// }

// for(let i=1; i<6; i++){
//     document.write(`<br>${i}- Kaan`)
// }

/* 

Diziler(Array) / Temel Bilgi

let data1 = [para1,para2,para3,....] veya let data2 = Array(para1,para2,para3,....)
Herhangi bir parametreye ulaşmak için değişkenAdı[indisNo]

*/

let ogr = [
    'Hayko Cepkin',
    'Mahmut Tuncer',
    'Bülent Ersoy',
    'Ajdar',
    'Müge Anlı'
]

console.log(ogr[3]) //Ekrana Ajdar yazar

for(let i=0; i<5 ;i++){
    console.log(ogr[i])
}

console.log(ogr.length)

for(let i=0; i<ogr.length ;i++){
    console.log(ogr[i])
}

// let dersler = [
//     'Yazılım Eğitimleri',
//     'Tasarım Eğitimleri',
//     'Mimarlık Eğitimleri',
//     'Ms Ofis Eğitimleri',
//     'Muhasebe Eğitimleri'
// ]

// for(let i =0; i<dersler.length;i++){
//     document.write(
//         `
//         <div class="box">
//             <h4>${dersler[i]}</h4>
//         </div>
//         `
//     )
// }


let menu = [
    'Ana Sayfa',
    'Eğitimler',
    'Eğitim Takvimi',
    'Başarı Hikayeleri',
    'İletişim'
]

for(let navigation of menu){
    document.write(
        `
            <a href="" class="linkler">${navigation}</a>
        `
    )
}

/* 

Ödev

let menu = [
    'Ana Sayfa',
    'index.html',
    'Eğitimler',
    'egitimler.html',
    'Eğitim Takvimi',
    'takvim.html',
    'Başarı Hikayeleri',
    'hikayeler.html',
    'İletişim',
    'iletisim.html'
]

Menüyü linkleri ile ekrana yazdırın

*/


