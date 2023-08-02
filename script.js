var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide(n) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.opacity = "1";
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

var slideInterval = setInterval(nextSlide, 4000);

var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", function() {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 4000);
});

prevBtn.addEventListener("click", function() {
    clearInterval(slideInterval);
    prevSlide();
    slideInterval = setInterval(nextSlide, 4000);
});

showSlide(currentSlide);

/*CODIGO PARA LA BARRA DE SERVICIOS MENU */

document.addEventListener("DOMContentLoaded", function() {
    var dropdownTrigger = document.querySelector(".dropdown__trigger");
    var dropdownContent = document.querySelector(".dropdown__content");

    dropdownTrigger.addEventListener("mouseenter", function() {
        dropdownContent.style.display = "block";
    });

    dropdownTrigger.addEventListener("mouseleave", function() {
        dropdownContent.style.display = "none";
    });
});

/*CODIGO PARA LA BARRA DE SERVICIOS MENU EN CELULAR*/