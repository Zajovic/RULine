

function openModal() {
    document.getElementById("slide-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("slide-modal").style.display = "none";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("zoomImg");
    if (n > slides.length) {
        slideIndex = 1
    };
    if (n < 1) {
        slideIndex = slides.length
    };
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}