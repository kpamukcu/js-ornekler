/* 

Soru: "Ters Çevirici"

Kullanıcıdan alınan bir kelimenin veya cümlenin tersini yazdıran bir fonksiyon yaz.

Görev:
Kullanıcı bir kelime veya cümle girecek ve bu kelimenin/cümlenin ters hali ekranda gösterilecek.

Beklenen Çıktı:
Örneğin, kullanıcı "merhaba" yazarsa, çıktı şu şekilde olmalı: "abahrem"

Eğer kullanıcı "JavaScript eğlencelidir" yazarsa, çıktı: "ridnelceneğ tpircSavaJ" şeklinde olmalı.

İpucu:
Girdi olarak bir string (metin) al ve tersini elde etmek için string'i array’e çevir.
Array’in elemanlarını tersine çevirip tekrar string'e dönüştür.

*/



let form = document.querySelector('#form')
let kelime = document.querySelector('#kelime')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    metin = kelime.value.split('')
    console.log(metin)
    metin.reverse()
    console.log(metin.join('')) //toString() ile de yapılabilir ama harflerin arasına virgül koyar.
})