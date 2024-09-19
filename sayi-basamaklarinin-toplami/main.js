/* 

Soru: "Sayının Basamak Toplamı"

Kullanıcıdan bir sayı al ve bu sayının basamaklarının toplamını hesaplayan bir fonksiyon yaz.

Görev:
Kullanıcıdan bir tam sayı al ve bu sayının basamaklarının toplamını ekranda göster.

Beklenen Çıktı:
Örneğin, kullanıcı 1234 girerse, çıktı şu şekilde olmalı: 10 (çünkü 1 + 2 + 3 + 4 = 10)

İpucu:
Sayıyı string’e çevirip her bir basamağı ayırarak işlem yapabilirsin.
Basamakları array olarak topla, sonra bu array’deki elemanların toplamını bul.

*/

let form = document.querySelector('#form')
let sayi = document.querySelector('#sayi')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    sayi = sayi.value.split('')
    console.log(sayi)

    diziInt = []

    for (let i = 0; i < sayi.length; i++) {
        diziInt.push(parseInt(sayi[i]))
    }

    console.log(diziInt.reduce((acc, current) => acc + current, 0))

})