document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const megaMenu = document.querySelector('.mega-menu');

    menuToggle.addEventListener('click', function() {
        megaMenu.classList.toggle('active');
    });

    // Close the mega menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !megaMenu.contains(event.target)) {
            megaMenu.classList.remove('active');
        }
    });
});