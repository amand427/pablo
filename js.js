const playerEl = document.getElementById('player');
const cenarioEl = document.querySelector('div');
let noChao = true;

let velocidadeY = 0, velocidadeX = 0, gravidade = 0.8;
let y = 690;
let x = 10;

function update() {

    let limiteBaixo = cenarioEl.clientHeight;
    let limiteDireito = cenarioEl.clientWidth - playerEl.offsetWidth;
    let limiteEsquerdo = 0;

    x += velocidadeX;

    if (!noChao) 
        velocidadeY += gravidade; 

    y += velocidadeY;

    if (y > (limiteBaixo - playerEl.offsetHeight)) {
        velocidadeY = 0;
        noChao = true;
        y = limiteBaixo - playerEl.offsetHeight;
    }
    if (x > limiteDireito) {
        velocidadeX = 0;
        x = limiteDireito;
    }
    if (x < limiteEsquerdo) {
        velocidadeX = 0;
        x = limiteEsquerdo;
    }
    playerEl.style.left = x + 'px';
    playerEl.style.top = y + 'px';

    requestAnimationFrame(update);
}

document.addEventListener('keydown', (event) => {
    let keyP = event.key.toUpperCase();
    console.log(keyP);

    if (keyP === 'W' && noChao === true) {
        velocidadeY = -20;
        noChao = false;
    }
    if (keyP === 'A') {
        velocidadeX = -10;
        playerEl.classList.remove('viraD');
        playerEl.classList.add('viraE');
        document.getElementById('player').src = 'pabloPIXandinho.gif'
    }
    if (keyP === 'S') 
        document.getElementById('player').src = 'pabloPIXagacha.png'
    if (keyP === 'D') {
        velocidadeX = 10;
        playerEl.classList.remove('viraE');
        playerEl.classList.add('viraD');
        document.getElementById('player').src = 'pabloPIXandinho.gif'
    }
})

/* document.addEventListener('keydown', (event) => {
    let keyP = event.key.toUpperCase();
    console.log(keyP);

    if (keyP === 'W' && noChao === true) {
        velocidadeY = -20;
        noChao = false;
    }
    if (keyP === 'A') {
        velocidadeX = -10;
        playerEl.classList.remove('viraD');
        playerEl.classList.add('viraE');
        document.getElementById('player').src = 'pabloPIXandinho.gif'
    }
    if (keyP === 'S') 
        document.getElementById('player').src = 'pabloPIXagacha.png'
    if (keyP === 'D') {
        velocidadeX = 10;
        playerEl.classList.remove('viraE');
        playerEl.classList.add('viraD');
        document.getElementById('player').src = 'pabloPIXandinho.gif'
    }
})

*/
document.addEventListener('keyup', (event) => {
    let keyP = event.key.toUpperCase();

    if (keyP === 'W' && noChao === true) 
        velocidadeY = 0;
    if (keyP === 'A') {
        velocidadeX = 0;
        document.getElementById('player').src = 'pabloPIX.gif'
    }
    if (keyP === 'S') 
        document.getElementById('player').src = 'pabloPIX.gif'
    if (keyP === 'D'){ 
        velocidadeX = 0;
        document.getElementById('player').src = 'pabloPIX.gif'
    }
})

update();