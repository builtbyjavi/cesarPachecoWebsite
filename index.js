
const headerLine1 = document.querySelector('.display-5');
const headerLine2 = document.querySelector('.display-6');

const mediaQuery = window.matchMedia('(max-width: 600px)');

window.addEventListener('resize', function() {
    if (mediaQuery.matches) {
        headerLine1.classList.remove('display-5');
        headerLine2.classList.remove('display-6');
    } else {
        headerLine1.classList.add('display-5');
        headerLine2.classList.add('display-6');
    }
})
