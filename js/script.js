document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

const images = {
    "option1": "./aset/yk.jpg",
    "option2": "./aset/bai.jpg",
    "option3": "./aset/papua.jpg",
    "option4": "./aset/Iombok.jpg",
    "option5": "./aset/sumut.jpg",
    "option6": "./aset/ntt.jpg",
};

let currentImageIndex = 0;
const imageContainer = document.querySelector(".image-container");
const image = imageContainer.querySelector("img");
const interestSelect = document.getElementById("interest");
let interval;

function startAutoSlide() {
    interval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % Object.values(images).length;
        image.src = Object.values(images)[currentImageIndex];
    }, 3000);
}

function stopAutoSlide() {
    clearInterval(interval);
}

interestSelect.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    if (images[selectedValue]) {
        stopAutoSlide();
        image.src = images[selectedValue];
    } else {
        startAutoSlide();
    }
});

startAutoSlide();
