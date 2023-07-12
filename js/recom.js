const rtrack = document.querySelector('.r_track');
const rslides = Array.from(rtrack.children);
const rnextButton = document.querySelector('.r_btn_right');
const rprevButton = document.querySelector('.r_btn_left');

const rslideWidth = (rslides[0].getBoundingClientRect().width);

const rsetSlidePosition = (rslides, index) => {
    rslides.style.left = rslideWidth*index + 'px';
};
rslides.forEach(rsetSlidePosition);

const rmoveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    // currentSlide.classList.remove('watch_slide');
    // targetSlide.classList.add('watch_slide');
}

rprevButton.addEventListener('click', e => {
    const crecomSlide = rtrack.querySelector('.recom_slide');
    let rpslide = crecomSlide;
    let x=5;
    while(x--){
        rpslide = rpslide.previousElementSibling;
    }
    const precomSlide = rpslide;
    // if(pwatchSlide==wslides[0]){
    //     w_btn_left.classList.add('is_hidden');
    // }
    // else{
    //     w_btn_left.classList.remove('is_hidden');
    // }
    const precomIndex = rslides.findIndex(slide => slide === precomSlide);
    rmoveToSlide(rtrack,crecomSlide,precomSlide);
    crecomSlide.classList.remove('recom_slide');
    precomSlide.classList.add('recom_slide');
})

rnextButton.addEventListener('click', e => {
    const crecomSlide = rtrack.querySelector('.recom_slide');
    
    let rnslide = crecomSlide;
    let y=5;
    while(y--){
        rnslide = rnslide.nextElementSibling;
    }
    const nrecomSlide = rnslide;
    
    const rnextIndex = rslides.findIndex(slide => slide === nrecomSlide);

    rmoveToSlide(rtrack,crecomSlide,nrecomSlide);
    crecomSlide.classList.remove('recom_slide');
    nrecomSlide.classList.add('recom_slide');
});

