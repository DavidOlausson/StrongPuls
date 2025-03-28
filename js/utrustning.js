// Vänta tills hela dokumentet är laddat
document.addEventListener('DOMContentLoaded', function() {
    // Hämta alla flikar (tab buttons)
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Lägg till klickhändelse för varje flik
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Ta bort 'active' klassen från alla flikar och innehållspaneler
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            
            // Lägg till 'active' klassen på den klickade fliken
            this.classList.add('active');
            
            // Hämta ID för den valda innehållspanelen från data-target attributet
            const targetId = this.getAttribute('data-target');
            // Aktivera motsvarande innehållspanel
            document.getElementById(targetId).classList.add('active');
        });
    });
});