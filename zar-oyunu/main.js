let zar = [
    './img/zar1.jpg',
    './img/zar2.jpg',
    './img/zar3.jpg',
    './img/zar4.jpg',
    './img/zar5.jpg',
    './img/zar6.jpg'
]

let pcZar1 = document.querySelector('#pcZar1')
let pcZar2 = document.querySelector('#pcZar2')
let seninZar1 = document.querySelector('#seninZar1')
let seninZar2 = document.querySelector('#seninZar2')
let pcButon = document.querySelector('#pcButon')
let seninButon = document.querySelector('#seninButon')

function pcZar() {
    let pc1 = Math.ceil(Math.random() * 6)
    let pc2 = Math.ceil(Math.random() * 6)

    if (pc1 == 1) {
        pcZar1.src = zar[pc1 - 1]
    } else if (pc1 == 2) {
        pcZar1.src = zar[pc1 - 1]
    } else if (pc1 == 3) {
        pcZar1.src = zar[pc1 - 1]
    } else if (pc1 == 4) {
        pcZar1.src = zar[pc1 - 1]
    } else if (pc1 == 5) {
        pcZar1.src = zar[pc1 - 1]
    } else if (pc1 == 6) {
        pcZar1.src = zar[pc1 - 1]
    }

    if (pc2 == 1) {
        pcZar2.src = zar[pc2 - 1]
    } else if (pc2 == 2) {
        pcZar2.src = zar[pc2 - 1]
    } else if (pc2 == 3) {
        pcZar2.src = zar[pc2 - 1]
    } else if (pc2 == 4) {
        pcZar2.src = zar[pc2 - 1]
    } else if (pc2 == 5) {
        pcZar2.src = zar[pc2 - 1]
    } else if (pc2 == 6) {
        pcZar2.src = zar[pc2 - 1]
    }

    pcButon.setAttribute('disabled', 'true')
}

function seninZar() {
    let sen1 = Math.ceil(Math.random() * 6)
    let sen2 = Math.ceil(Math.random() * 6)

    if (sen1 == 1) {
        seninZar1.src = zar[sen1 - 1]
    } else if (sen1 == 2) {
        seninZar1.src = zar[sen1 - 1]
    } else if (sen1 == 3) {
        seninZar1.src = zar[sen1 - 1]
    } else if (sen1 == 4) {
        seninZar1.src = zar[sen1 - 1]
    } else if (sen1 == 5) {
        seninZar1.src = zar[sen1 - 1]
    } else if (sen1 == 6) {
        seninZar1.src = zar[sen1 - 1]
    }

    if (sen2 == 1) {
        seninZar2.src = zar[sen2 - 1]
    } else if (sen2 == 2) {
        seninZar2.src = zar[sen2 - 1]
    } else if (sen2 == 3) {
        seninZar2.src = zar[sen2 - 1]
    } else if (sen2 == 4) {
        seninZar2.src = zar[sen2 - 1]
    } else if (sen2 == 5) {
        seninZar2.src = zar[pc2 - 1]
    } else if (sen2 == 6) {
        seninZar2.src = zar[sen2 - 1]
    }

    seninButon.setAttribute('disabled', 'true')
}

function yeniOyun() {
    window.location.href = 'index.html'
}




