const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const timer = document.querySelector('.timer');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    temporizador

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '_midia/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        clearInterval(temporizador);
    }

}, 10)

document.addEventListener('keydown', jump);

const temporizador = setInterval(() => {
    const tempoAtual = +timer.innerHTML;
    timer.innerHTML = tempoAtual + 1;
}, 1000)