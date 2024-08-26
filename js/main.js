document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        const options = this.querySelector('.options');
        const isVisible = options.classList.contains('visible');

        // Hide all other boxes
        document.querySelectorAll('.options').forEach(option => {
            option.classList.remove('visible');
            option.classList.add('hidden');
        });

        // Toggle the clicked box
        if (!isVisible) {
            options.classList.remove('hidden');
            options.classList.add('visible');
        }
    });
});