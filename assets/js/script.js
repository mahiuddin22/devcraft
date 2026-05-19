// Typed Text

new Typed('.typed-text', {

    strings: [
        'Modern Websites',
        'Laravel Applications',
        'WordPress Solutions',
        'Node.js APIs'
    ],

    typeSpeed: 60,
    backSpeed: 40,
    loop: true

});


// AOS Animation

AOS.init({

    duration: 1200,
    once: true

});


// Swiper Slider

var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 2500,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {

        768: {
            slidesPerView: 2,
        },

        992: {
            slidesPerView: 3,
        }

    }

});


// Countdown

const countDownDate = new Date("Dec 31, 2026 23:59:59").getTime();

setInterval(function () {

    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);

// Loader Hide

window.addEventListener("load", function(){

    document.getElementById("loader").style.opacity = "0";
    document.getElementById("loader").style.visibility = "hidden";

});