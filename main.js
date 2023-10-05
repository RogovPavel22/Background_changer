const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const colorText = document.querySelector('.color');

let i = '#';

function random() {
    i += (Math.floor(Math.random() * 16)).toString(16)
    return i.length == 7 ? i : random()     
};

btn.addEventListener('click', () => {
    i = '#';
    let randomColor = random();
    body.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
    colorText.style.color = randomColor;
});