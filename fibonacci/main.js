let adet = document.querySelector('#adet')
let form = document.querySelector('#form')

let fibo = [0, 1]

form.addEventListener('submit', (form) => {
    form.preventDefault();

    for (let i = 0; i < adet.value - 2; i++) {
        fibo.push(fibo[i] + fibo[i + 1])
    }
    console.log(fibo)
})