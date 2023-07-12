const track = document.querySelector('.c_track');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.c_btn-right');
const prevButton = document.querySelector('.c_btn-left');
const dotsNav = document.querySelector('.c_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth*index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('curr_slide');
    targetSlide.classList.add('curr_slide');
}

const updateDots = (currentDot,targetDot) => {
    currentDot.classList.remove('curr_slide');
    targetDot.classList.add('curr_slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex===0){
        prevButton.classList.add('is_hidden');
        nextButton.classList.remove('is_hidden');
    }
    else if(targetIndex === slides.length - 1){
        prevButton.classList.remove('is_hidden');
        nextButton.classList.add('is_hidden');
    }
    else{
        prevButton.classList.remove('is_hidden');
        nextButton.classList.remove('is_hidden');
    }
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.curr_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.curr_slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)

    moveToSlide(track,currentSlide,prevSlide);
    updateDots(currentDot,prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.curr_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.curr_slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)

    moveToSlide(track,currentSlide,nextSlide);
    updateDots(currentDot,nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});


dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if(!targetDot) return ;

    const currentSlide = track.querySelector('.curr_slide');
    const currentDot = dotsNav.querySelector('.curr_slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot,targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})