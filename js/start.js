// Vänta tills DOM-innehållet har laddats innan skriptet körs
document.addEventListener('DOMContentLoaded', () => {
    // Hämta referens till modal-element från DOM
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close');
    const membershipBtn = document.getElementById('membershipBtn');
    const trialBtn = document.getElementById('trialBtn');

    // Funktion för att öppna modalen och visa innehåll
    function openModal(content) {
        // Sätt in innehållet i modal-kroppen
        modalBody.innerHTML = content;
        // Visa modalen
        modal.style.display = 'block';
        // Förhindra scrollning på bakgrunden
        document.body.style.overflow = 'hidden';
    }

    // Funktion för att stänga modalen
    function closeModal() {
        // Dölj modalen
        modal.style.display = 'none';
        // Återställ scrollning
        document.body.style.overflow = 'auto';
    }

    // Lägg till händelsehanterare för att stänga modal
    closeBtn.onclick = closeModal;

    // Stäng modalen om användaren klickar utanför modalinnehållet
    window.onclick = (event) => {
        if (event.target == modal) {
            closeModal();
        }
    }

    // Händelsehanterare för medlemskapsknappen
    membershipBtn.onclick = () => {
        // Skapa HTML-innehåll för medlemskapsformuläret
        const membershipContent = `
            <h2>Välj Ditt Medlemskap</h2>
            <form id="membershipForm" onsubmit="event.preventDefault(); submitForm('membership');">
                <select required>
                    <option value="">Välj medlemskapstyp</option>
                    <option>Bas - 299 kr/mån (12 mån)</option>
                    <option>Flex - 399 kr/mån (3 mån)</option>
                    <option>Premium - 499 kr/mån (12 mån)</option>
                    <option>Student - 249 kr/mån (terminsbundet)</option>
                </select>
                <input type="text" placeholder="Namn" required>
                <input type="email" placeholder="E-post" required>
                <input type="tel" placeholder="Telefon" required>
                <button type="submit" class="cta-button">Starta Medlemskap</button>
            </form>
        `;
        // Öppna modalen med medlemskapsinnehållet
        openModal(membershipContent);
    }

    // Händelsehanterare för prova-på-knappen
    trialBtn.onclick = () => {
        // Skapa HTML-innehåll för prova-på-formuläret
        const trialContent = `
            <h2>Boka Prova-På Pass</h2>
            <form id="trialForm" onsubmit="event.preventDefault(); submitForm('trial');">
                <input type="text" placeholder="Namn" required>
                <input type="email" placeholder="E-post" required>
                <input type="tel" placeholder="Telefon" required>
                <select required>
                    <option value="">Välj träningstyp</option>
                    <option>Gym Introduktion</option>
                    <option>Funktionell Träning</option>
                    <option>Yoga Flow</option>
                    <option>HIIT</option>
                    <option>Styrketräning</option>
                </select>
                <button type="submit" class="cta-button">Boka Pass</button>
            </form>
        `;
        // Öppna modalen med prova-på-innehållet
        openModal(trialContent);
    }

    // Funktion för att hantera formulärinskickning
    function submitForm(type) {
        // Skapa ett meddelande baserat på formulärtyp
        const message = type === 'membership' 
            ? 'Tack för din medlemskapsansökan! Vi kontaktar dig inom kort.'
            : 'Tack för din bokning! Vi ser fram emot att träffa dig.';
        
        // Visa bekräftelsemeddelande
        alert(message);
        // Stäng modalen
        closeModal();
    }
});