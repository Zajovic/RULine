

function openModal() {
    document.getElementById("slide-modal").style.display = "block";
}

function closeModal() {
    removeAlt();
    document.getElementById("slide-modal").style.display = "none";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function removeAlt() {
    let divAlt = document.getElementById("caption");
    
    if (divAlt !== null) {
        divAlt.remove();
    }
}

function displayAlt() {
    let slides = document.getElementsByClassName("zoomImg");
    let slidesAlt = slides[slideIndex - 1].alt;
    
    let caption = document.createElement("div");
    caption.id = "caption";
    caption.innerHTML = slidesAlt;
    let modal = document.getElementById("slide-modal");
    modal.appendChild(caption);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("zoomImg");
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
    
    displayAlt();
}

function plusSlides(n) {
    removeAlt();
    showSlides(slideIndex += n);
}