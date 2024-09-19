/* 

Soru: "Rastgele Sayı Tahmini"

Bilgisayarın rastgele seçtiği bir sayıyı tahmin etmeye çalışacağın bir oyun yap. Bilgisayar 1 ile 100 arasında rastgele bir sayı seçsin ve kullanıcı bu sayıyı bulana kadar tahmin etsin. Her tahminden sonra bilgisayar kullanıcının tahmininin büyük mü küçük mü olduğunu söylesin.

Görev:
Kullanıcıdan bir tahmin al, bilgisayarın seçtiği sayıdan küçükse "Daha büyük bir sayı giriniz", büyükse "Daha küçük bir sayı giriniz" şeklinde kullanıcıyı yönlendir. Kullanıcı doğru tahmini yapınca "Tebrikler, doğru tahmin!" yazdır.

Beklenen Çıktı:
1 ile 100 arasında bir sayı seçilir. Kullanıcı örneğin 50 tahmin ederse, bilgisayar sayısı 70 ise "Daha büyük bir sayı giriniz" mesajı verir.

İpucu:
Math.random() ve Math.floor() kullanarak rastgele bir tam sayı oluşturabilirsin.
Her tahminde kullanıcının girdisini alıp bilgisayarın sayısıyla karşılaştıracaksın.

*/

let form = document.querySelector('#form')
let sayi = document.querySelector('#sayi')
let sayiTut = Math.floor(Math.random() * 101)
console.log(sayiTut)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let tahmin = sayi.value.toLowerCase()

    while (true) {
        if (tahmin == sayiTut) {
            alert('Tahmin Doğru')
            window.location.href = 'index.html'
            break
        } else if (tahmin < sayiTut) {
            alert('Daha Bütük Bir Sayı Gir')
            break
        } else if (tahmin > sayiTut) {
            alert('Daha Küçük Bir Sayı Gir')
            break
        } else if (tahmin == 'ç') {
            alert('Oyun iptal')
            window.location.href = 'index.html'
            break
        }
    }
})