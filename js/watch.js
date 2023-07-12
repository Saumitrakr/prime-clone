const wtrack = document.querySelector('.w_track');
const wslides = Array.from(wtrack.children);
const wnextButton = document.querySelector('.w_btn_right');
const wprevButton = document.querySelector('.w_btn_left');

const wslideWidth = wslides[0].getBoundingClientRect().width;
console.log(wslides[0].getBoundingClientRect().width)

console.log(wslides)
const wsetSlidePosition = (wslides, index) => {
    wslides.style.left = wslideWidth*index + 'px';
};
wslides.forEach(wsetSlidePosition);

const wmoveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    // currentSlide.classList.remove('watch_slide');
    // targetSlide.classList.add('watch_slide');
}

wprevButton.addEventListener('click', e => {
    const cwatchSlide = wtrack.querySelector('.watch_slide');
    let pslide = cwatchSlide;
    let x=5;
    while(x--){
        pslide = pslide.previousElementSibling;
    }
    const pwatchSlide = pslide;
    // if(pwatchSlide==wslides[0]){
    //     w_btn_left.classList.add('is_hidden');
    // }
    // else{
    //     w_btn_left.classList.remove('is_hidden');
    // }
    const pwatchIndex = wslides.findIndex(slide => slide === pwatchSlide);
    wmoveToSlide(wtrack,cwatchSlide,pwatchSlide);
    cwatchSlide.classList.remove('watch_slide');
    pwatchSlide.classList.add('watch_slide');
})

wnextButton.addEventListener('click', e => {
    const cwatchSlide = wtrack.querySelector('.watch_slide');
    console.log(cwatchSlide);
    let nslide = cwatchSlide;
    let y=5;
    while(y--){
        nslide = nslide.nextElementSibling;
    }
    const nwatchSlide = nslide;
    // if(nwatchSlide==null){
    //     w_btn_right.classList.add('is_hidden');
    // }
    // else{
    //     w_btn_right.classList.remove('is_hidden');
    // }
    const wnextIndex = wslides.findIndex(slide => slide === nwatchSlide);

    wmoveToSlide(wtrack,cwatchSlide,nwatchSlide);
    cwatchSlide.classList.remove('watch_slide');
    nwatchSlide.classList.add('watch_slide');
});

