function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    
    const bars = document.querySelectorAll('.hamburger .bar');
    bars[0].classList.toggle('rotate1');
    bars[1].classList.toggle('hide');
    bars[2].classList.toggle('rotate2');
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});