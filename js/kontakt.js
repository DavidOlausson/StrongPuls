// Hantera kartvisning
document.addEventListener('DOMContentLoaded', function() {
    // Kartvisning
    const mapToggles = document.querySelectorAll('.map-toggle');
    const closeBtns = document.querySelectorAll('.close-map');
    
    mapToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetMap = document.getElementById(targetId);
            if (targetMap) {
                targetMap.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Förhindra scrollning på sidan när kartan visas
            }
        });
    });
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const mapContainer = this.closest('.map-container');
            if (mapContainer) {
                mapContainer.classList.add('hidden');
                document.body.style.overflow = ''; // Återställ scrollning
            }
        });
    });
    
    // Hantera kontaktformulär
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const resetFormBtn = document.querySelector('.reset-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Här skulle du vanligtvis skicka formulärdata till en server
            // För denna demo simulerar vi en framgångsrik inskickning
            
            // Validera formuläret (enkel validering)
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Dölj formuläret och visa framgångsmeddelandet
                contactForm.classList.add('hidden');
                formSuccess.classList.remove('hidden');
                
                // Återställ formuläret (rensa fälten)
                contactForm.reset();
            }
        });
    }
    
    if (resetFormBtn) {
        resetFormBtn.addEventListener('click', function() {
            // Dölj framgångsmeddelandet och visa formuläret igen
            formSuccess.classList.add('hidden');
            contactForm.classList.remove('hidden');
        });
    }
    
    // Hantera Accordion/FAQ-sektion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Hämta innehållselementet som följer denna rubrik
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');
            
            // Växla visningsstatus för innehållet
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = '-';
            }
            
            // Toggla active-klass på accordion-item (förälderelement)
            this.parentElement.classList.toggle('active');
        });
    });
    
    // Hantera nyhetsbrev-prenumeration
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value.trim()) {
                // Här skulle du vanligtvis skicka e-postadressen till servern
                
                // Visa en bekräftelse (enkel alert för demo)
                alert('Tack för din prenumeration!');
                
                // Återställ formuläret
                this.reset();
            }
        });
    }
});