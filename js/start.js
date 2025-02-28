document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close');
    const membershipBtn = document.getElementById('membershipBtn');
    const trialBtn = document.getElementById('trialBtn');

    function openModal(content) {
        modalBody.innerHTML = content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeBtn.onclick = closeModal;

    window.onclick = (event) => {
        if (event.target == modal) {
            closeModal();
        }
    }

    membershipBtn.onclick = () => {
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
        openModal(membershipContent);
    }

    trialBtn.onclick = () => {
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
        openModal(trialContent);
    }

    function submitForm(type) {
        const message = type === 'membership' 
            ? 'Tack för din medlemskapsansökan! Vi kontaktar dig inom kort.'
            : 'Tack för din bokning! Vi ser fram emot att träffa dig.';
        
        alert(message);
        closeModal();
    }
});