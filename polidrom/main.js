/* 

Soru: "Palindrom Kontrolü"

Bir kelimenin veya cümlenin palindrom olup olmadığını kontrol eden bir fonksiyon yaz. Palindrom, tersten okunduğunda da aynı olan kelime veya cümlelerdir. Örneğin, "kavak" ve "ey edip adanada pide ye" gibi.

Görev:
Kullanıcıdan bir kelime veya cümle al ve bu kelimenin/cümlenin palindrom olup olmadığını kontrol et.

Beklenen Çıktı:
Kullanıcı "kavak" girerse, çıktı: "Bu bir palindromdur".
Kullanıcı "merhaba" girerse, çıktı: "Bu bir palindrom değildir".
İpucu:
Girdiyi ters çevirip, orijinal haliyle kıyasla.
Büyük-küçük harf duyarlılığını kaldırmak için metni küçük harfe çevir.
Boşluk ve noktalama işaretlerini ihmal etmek için, sadece harfleri kontrol et.    =>      .replace(/\s+/g, '')
Bu soru, string manipülasyonu ve kontrol yapılarını kullanarak çözebilirsin.

*/

let form = document.querySelector('#form')
let kelime = document.querySelector('#kelime')
let sonuc = document.querySelector('#sonuc')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let metin = kelime.value.toLowerCase()  //Imput'tan girilen değer yakalandı
    let arrMetin = metin.split('') //Yakalanan değer split ile parçalanıp dizi data dönüşürüldü
    let strTersMetin = arrMetin.reverse().join('') // Parçalanıp dizi dataya dönüştürülen değer tersten virgülsüz olarak stringe dönüştürüldü

    if (metin == strTersMetin) {
        sonuc.innerText = `${metin} kelimesi Polidromdur`
    } else {
        sonuc.innerText = `${metin} kelimesi Polidrom Değildir.`
    }
})