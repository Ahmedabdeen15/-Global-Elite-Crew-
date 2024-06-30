document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('#navbarSupportedContent');
    var navCover = document.querySelector('.nav-cover');
    var navElement = document.querySelector('nav');

    navbarToggler.addEventListener('click', function() {
        if (navbarCollapse.classList.contains('show')) {
            navCover.style.height = '95px'; // Reset to default height
            navElement.style.height = '95px'; // Reset to default height
            navElement.style.borderRadius = '0px 0px 160px 160px'; // Reset border-radius
        } else {
            navCover.style.height = '45vh'; // Expand to full viewport height
            navElement.style.height = '45vh'; // Expand to full viewport height
            navElement.style.borderRadius = '0px 0px 90px 90px'; // Remove border-radius for full height
        }
    });

    // Ensure nav-cover and nav reset height when navbar is collapsed
    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        navCover.style.height = '95px';
        navElement.style.height = '95px';
        navElement.style.borderRadius = '0px 0px 80px 80px';
    });
});