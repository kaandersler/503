alert('Bu benim ilk external scriptim')

console.log('Bu benim ikinci external scriptim')

//console.log('Bu ilk Hata")
//console.log('Bu ikinci Hata)
//console.log('Bu üçüncü hata'


/* 
Data Types (Data Türleri) 

A) Primitive Data Types (İlkel Data Türleri)
1- String -> Metinsel ifadelere denilir. tek tırnak ve/veya çift tırnak arasında kullanılır. Ör: 'Kaan Pamukcu'. Not: Boşluklar da karaktere olarak geçer.
2- Integer -> Tam sayılardan oluşan data türüdür. Tırnak içinde yazılmaz. Aksi taktirde matematiksel işlem yapılamaz. Ekran çıktısı Number olarak geçer.
3- Float -> Ondalıklı sayılardan oluşan data türüdür. Tırnak içinde yazılamazlar. Aksi taktirde matematiksel işlem yapılamaz. Ekran çıktısı Number olarak geçer.
Not: 5,2 yanlış - 5.2 Doğru yazım biçimidir.
4- Boolean -> Mantıksal veri türüdür.True ve false sonuçları döner.
5- Undefined -> Tanımlanmamış data demektir.
6- Null -> Değişkene boş bir değer atamak için kullanılır.

B) Non-Primitive Data Types(Gelişmiş Data Türleri)
1- Array() -> Dizi data türüdür. Bir değişekene birden fazla değer ataması yapmak için kullanılır. 
2- Objects(Nesneler) -> Nesne data türü olarak geçer. Kendisi da dahil olmak üzere bütün data türleri içine tanımlanabilir. 
3- Functions(Fonksiyonlar) -> Diğer tüm data türlerinin özel olarak bir işlem sürecine dahil edilmesidir.

NOT: typeof()-> bir değerin data türünü kontrol etmek için kullanılan ön tanımlı fonsiyondur.
*/

console.log(typeof('5')) //Ekrana String yazar
console.log(typeof("5")) //Ekrana String yazar
console.log(typeof(5))  //Ekrana Number yazar
console.log(typeof(5.8)) //Ekrana Number yazar
console.log(typeof(5,'Kaan')) //Ekrana String yazar
console.log(typeof(Kaan)) //Ekrana undefined yazar
console.log(typeof('Kaan Pamukcu')) //Ekrana string yazar

console.log(prompt('Adınızı Girin')) //Ekrana Kaan yazar.
console.log(typeof(prompt('Yaşınızı Girin')))

//Not: ister promtp ile ister input ile alınan bilgi ne olursa olsun data türü özellikle dönüştürülmediği taktirde string'tir.