document.querySelectorAll('.button-fill').forEach(button => {
    button.addEventListener('mouseenter', function() {
        const buttonInside = this.querySelector('.button-inside');
        buttonInside.classList.add('full');
    });

    button.addEventListener('mouseleave', function() {
        const buttonInside = this.querySelector('.button-inside');
        buttonInside.classList.remove('full');
    });
});