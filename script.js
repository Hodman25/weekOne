const tog = document.getElementById('tog');
const bars = document.getElementById('bars');

bars.addEventListener('click', () => {
    if (tog.classList.contains('hidden')) {
        tog.classList.remove('hidden'); 
    } else {
        tog.classList.add('hidden');
    }
});