document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.juego-card');
    
    cards.forEach((card, index) => {
        // Agrega la clase 'animate' después de un retraso
        // El retraso crea un efecto escalonado para las tarjetas
        setTimeout(() => {
            card.classList.add('animate');
        }, 200 * (index + 1)); // 200ms de retraso para la primera, 400ms para la segunda, etc.
    });
});