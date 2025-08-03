import {images, showimage, startAutoSlide, nextImage} from './slider.mjs';
showimage(0);
startAutoSlide();
window.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    document.getElementById("LastModified").textContent = `Last Modified: ${lastModified}`;

    const Button = document.getElementById("menu");

    const menu = document.getElementById("animate-me");

    Button.addEventListener('click', () => {
        menu.classList.toggle("show");
        Button.classList.toggle("show");
    
    
    
    });
    
});