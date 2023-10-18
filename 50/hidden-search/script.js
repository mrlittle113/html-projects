const searchToggle = document.getElementById('search-toggle');
const searchInput = document.getElementById('search-input');

let isOpen = false;

searchToggle.addEventListener('click', () => {
    if (!isOpen) {
        searchInput.classList.add('active')
    }
    else {
        searchInput.classList.remove('active')
    }
    isOpen = !isOpen;
})