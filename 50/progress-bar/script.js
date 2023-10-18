const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


let current = 1;

prev.addEventListener('click', ()=>  {
    current--;
    if (current < 1) {
        current = 1;
    }
    update()
})

next.addEventListener('click', ()=>  {
    current++;
    if (current > circles.length) {
        current = circles.length;
    }
    update()
})
 
function update() {
    circles.forEach((circle, i) => {
        if (i < current) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })
    progress.style.width = ((current-1) / (circles.length-1)) * 100 + '%';

    if (current > 1) {
        prev.disabled = false;
    }
    else {
        prev.disabled = true;
    }

    if (current == circles.length) {
        next.disabled = true;
    }
    else {
        next.disabled = false;
    }
}