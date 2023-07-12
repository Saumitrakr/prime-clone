const ltrack = document.querySelector('.l_track');
const lslides = Array.from(ltrack.children);
const lnextButton = document.querySelector('.l_btn_right');
const lprevButton = document.querySelector('.l_btn_left');

const lslideWidth = (lslides[0].getBoundingClientRect().width);

const lsetSlidePosition = (lslides, index) => {
    lslides.style.left = lslideWidth*index + 'px';
};
lslides.forEach(lsetSlidePosition);

const lmoveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('lang_slide');
    targetSlide.classList.add('lang_slide');
}

lprevButton.addEventListener('click', e => {
    const clangSlide = ltrack.querySelector('.lang_slide');
    let lpslide = clangSlide;
    let x=5;
    while(x--){
        lpslide = lpslide.previousElementSibling;
    }
    const plangSlide = lpslide;
    const plangIndex = lslides.findIndex(slide => slide === plangSlide);
    rmoveToSlide(ltrack,clangSlide,plangSlide);
    // crecomSlide.classList.remove('recom_slide');
    // precomSlide.classList.add('recom_slide');
})

lnextButton.addEventListener('click', e => {
    const clangSlide = ltrack.querySelector('.lang_slide');
    
    let lnslide = clangSlide;
    let y=5;
    while(y--){
        lnslide = lnslide.nextElementSibling;
    }
    const nlangSlide = lnslide;
    
    const nlnextIndex = lslides.findIndex(slide => slide === nlangSlide);

    lmoveToSlide(ltrack,clangSlide,nlangSlide);
    // crecomSlide.classList.remove('recom_slide');
    // nrecomSlide.classList.add('recom_slide');
});

