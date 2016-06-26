$(function() {
	$('.main-nav_elem a').smoothScroll();
});

var slides = document.querySelectorAll('.testimonial_slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,7000);

function nextSlide() {
    slides[currentSlide].className = 'testimonial_slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'testimonial_slide showing';
}