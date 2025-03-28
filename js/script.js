// Funktion för att växla mobilmenyn
function toggleMenu() {
    // Hämta navigeringslänkarna
    const navLinks = document.querySelector('.nav-links');
    // Växla 'active' klassen för att visa/dölja menyn
    navLinks.classList.toggle('active');
    
    // Hämta hamburgar-menyns bars
    const bars = document.querySelectorAll('.hamburger .bar');
    // Animera hamburgar-menyns ikoner
    bars[0].classList.toggle('rotate1');
    bars[1].classList.toggle('hide');
    bars[2].classList.toggle('rotate2');
}

// Händelselyssnare för scroll-händelse
window.addEventListener('scroll', () => {
    // Hämta sidhuvudet
    const header = document.querySelector('header');
    // Lägg till/ta bort 'scrolled' klass baserat på scroll-position
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});