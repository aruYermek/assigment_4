window.onload = function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.opacity = 0.7;
        });

        card.addEventListener('mouseout', function() {
            this.style.opacity = 1; 
        });
    });
};