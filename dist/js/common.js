$(function() {
	$('.main-nav_elem a').smoothScroll();
});

////////// first slider

var slides_first = document.querySelectorAll('.testimonial_slide_first');
var currentSlide_first = 0;
var slideInterval_first = setInterval(nextSlide_first,5000);

function nextSlide_first() {
    slides_first[currentSlide_first].className = 'testimonial_slide_first';
    currentSlide_first = (currentSlide_first+1)%slides_first.length;
    slides_first[currentSlide_first].className = 'testimonial_slide_first showing';
}

////////// second slider

var slides_second = document.querySelectorAll('.testimonial_slide_second');
var currentSlide_second = 0;
var slideInterval_second = setInterval(nextSlide_second,5000);

function nextSlide_second() {
    slides_second[currentSlide_second].className = 'testimonial_slide_second';
    currentSlide_second = (currentSlide_second+1)%slides_second.length;
    slides_second[currentSlide_second].className = 'testimonial_slide_second showing';
}