let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let imgBtn = document.querySelectorAll('.img-btn');

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});
imgBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#img-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

document.addEventListener('DOMContentLoaded', function () {
    const imgButtons = document.querySelectorAll('.img-btn');
    const imgSlider = document.getElementById('img-slider');
    let currentIndex = 0;
    const slideInterval = 5000; // Change image every 5 seconds

    function changeImage() {
        imgButtons[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % imgButtons.length;
        imgButtons[currentIndex].classList.add('active');
        imgSlider.src = imgButtons[currentIndex].getAttribute('data-src');
    }

    // Initial setup
    imgSlider.src = imgButtons[currentIndex].getAttribute('data-src');

    // Click handler for manual selection
    imgButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            clearInterval(autoSlide);
            imgButtons[currentIndex].classList.remove('active');
            currentIndex = index;
            button.classList.add('active');
            imgSlider.src = this.getAttribute('data-src');
            autoSlide = setInterval(changeImage, slideInterval);
        });
    });

    // Start automatic sliding
    let autoSlide = setInterval(changeImage, slideInterval);
});