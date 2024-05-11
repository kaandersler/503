/* 

Arrays (Diziler)

Birden fazla değeri, bir değişkene atamak için kullanılır.
İçinde birden fazla data türünü barındırabilir. Not: functions hariç. 
Diziler boş olarak da oluşturulabilir.

let yada const degiskenAdi = Array(para1,para2,para3,....)
let yada const degiskenAdi = [para1,para2,para3,....]

NOT: Her bir parametrenin kendine ait indisNo'su vardır.

Metotlar:
1- concat() -> Birbirinden farklı olan dizileri birleştirir

*/

// let uye = ['Hayko', 'Cepkin', 55, 'Sanatçı']
// console.log(uye)
// console.log(uye[0])
// console.log(uye[1])
// console.log(uye[2])
// console.log(uye[3])
// console.log(uye.length)

//1. Yöntem
// let uzunluk = uye.length -> uzunluk değişkenine atanan değeri kullanabilmek için for döngüsünde bitiş noktası olarak uye.length yerine uzunluk değişkenini yazarak da çalıştırabiliriz.

// for (let i = 0; i < uye.length; i++) {
//     document.write(`${uye[i]}<br>`) //Uye değişkeninin değerlerini ekrana tek tek yazar.
// }

//2. Yöntem
/* 
Bu şekilde de oluşturulabilir.
for(let info of uye){
    console.log(info)
}

*/

// for (info of uye) {
//     console.log(info) //Uye değişkeninin değerlerini ekrana tek tek yazar.
// }


//split() ->Bir string ifadeyi parçalar ve dizi data haline çevirir.

// let yazDili = 'JavaScript'
// yazDili = yazDili.split('')
// console.log(yazDili)


// let fotos = 'img/foto1.webp,img/foto2.webp'
// fotos = fotos.split(',')
// console.log(fotos)

// for (resim of fotos) {
//     document.write(`<img src="${resim}" alt="">`)
//     //Not: şuan için html ve foto yapısı olmadığından console tarafında hata gösterir.
// }


//concat()
// let bilg = [
//     'Masaüstü',
//     'Laptop'
// ]

// let marka = [
//     'Lenono',
//     'Asus',
//     'Hp',
//     'Macbook'
// ]

// let tekno = bilg.concat(marka)
// console.log(tekno)

// let kgiyim = ['Etek', 'Bluz', 'Body'],
//     egiyim = ['Pantolon', 'Tshirt', 'Gömlek']

// let giyim = egiyim.concat(kgiyim)
// console.log(giyim)

// let cgiyim = ['Zıbın', 'Şapka', 'Çorap']
// let ggiyim = egiyim.concat(kgiyim, cgiyim)
// let ggiyim2 = giyim.concat(cgiyim)
// console.log(ggiyim)
// console.log(ggiyim2)

//indexOf() -> Bir argümanın dizi data içinde olup olmadığını kontrol eder eğer varsa değer olarak o parametrenin indisNos'unu değer olarak döner. Eğer aranılan argüman, parametreler içinde yoksa sonuç olarak -1 değerini verir.

// let uyeler = ['Hayko', 'Mahmut', 'Ajdar']

// console.log(uyeler.indexOf('Ajdar')) //Ekrana 2 yazar
// console.log(uyeler.indexOf('Yıldız')) //Ekrana -1 yazar

// let dil = ['html', 'css', 'bootstrap', 'php', 'javascript', 'c#']

// function bul() {
//     let input = prompt('Hangi Eğitimi Arıyorsunuz?')
//     input = input.toLowerCase()
//     if (dil.indexOf(input) >= 0) {
//         alert(`Aradığınız ${input} eğitimine yönlendirliyorsunuz. Lütfen Bekleyin.`)
//     } else {
//         document.write(`
//         Aradığınız ${input} eğitimi yoktur.<br>İlgilenebileceğiniz diğer eğitimlerimiz: <br>
//         `)
//         for(let egitim of dil){
//             document.write(`${egitim}<br>`)
//         }
//     }
// }

//includes() -> indexOf() metodu gibi çalışır ancak ilgili parametre varsa true yoksa false sonucu döner.

// let katAdi = ['Giyim','Teknoloji','Oyun','Gezi']
// console.log(katAdi.includes('Gezi'))

//Ödev indexOf ile yapılan örnek includes ile yapılacak


// push() -> Bir diznin sonuna yeni bir eleman eklemek için kullanılır. (Not: Birden fazla argüman eklenebilir.)
// pop() -> Bir dizi datanın en sonundaki elemanı çıkarmak için kullanılır
// shift() -> Bir dizi datanın ilk elemanını çıkarmak için kullanılır
// unshift() -> Bir dizi dataya ilk eleman olacak şekilde yeni parametre ekler

let R = []

while(true){
    let yeni = prompt('Yeni Kayıt mı?')
    if(yeni != 'h' && yeni != 'b' && yeni != 'sil'){
        R.push(yeni)
        console.log(R)
    } else if(yeni == 'b'){
        console.log('Dükkan Kapandı')
        break
    } else if(yeni == 'sil'){
        // R.pop(yeni) sonuncu kaydı siler
        R.shift(yeni)
        console.log(R)
    }
}


let kat = ['Giyim','Teknoloji']
kat.unshift('Araba')
console.log(kat)

/*

Ödev tc kimlik ile üyelik sistemi

Girilen tc kimlik datada olup olmadığı kontrol edilecek
eğer yoksa yeni kayıt varsa kaydınız var uyarı vericek
*/











