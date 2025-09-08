// Hamburger menu toggle and footer date logic

document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu functionality
    const menuBtn = document.getElementById('menuBtn');
    const header = document.querySelector('header');
    const nav = document.getElementById('mainNav');

    menuBtn.addEventListener('click', function () {
        header.classList.toggle('open');
        // Toggle hamburger icon to 'X' when open
        if (header.classList.contains('open')) {
            menuBtn.textContent = '✖';
        } else {
            menuBtn.textContent = '\u2630'; // Hamburger
        }
    });

    // Footer year and last modified
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const lastMod = document.getElementById('lastModified');
    if (lastMod) lastMod.textContent = `Last Modification: ${document.lastModified}`;
});
