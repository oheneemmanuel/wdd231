export const images = document.querySelectorAll('.slider-image');


export let current = 0;
export let intervalId;

export function showimage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("active", i== index);

    });
}

export function startAutoSlide() {
    intervalId  = setInterval(nextImage, 50000);

}
export function nextImage() {
    current = (current + 1) % images.length;
    showimage(current);
}

showimage(current);
startAutoSlide();

