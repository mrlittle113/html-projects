const bg = document.getElementById('bg');
const text = document.getElementById('loading-text');

let i = 1;

let int = setInterval(blurring, 30);

function blurring() {
    i++;

    text.innerText = i + "%";
    bg.style.filter = `blur(${(100 - i) + 'px'})`;

    if (i > 99) {
        clearInterval(int);
        text.style.visibility = 'hidden'
    }
}