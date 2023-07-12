const amztrack = document.querySelector('.amz_track')
const amzslides = Array.from(amztrack.children)
const amznextbtn = document.querySelector('.amz_btn_right')
const amzprevbtn = document.querySelector('.amz_btn_left')

const amzslideWidth = (amzslides[0].getBoundingClientRect().width);

const amzsetSlidePosition = (amzslides, index) => {
    amzslides.style.left = amzslideWidth*index + 'px';
};
amzslides.forEach(amzsetSlidePosition);

const amzmoveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('org_slide');
    targetSlide.classList.add('org_slide');
}

amzprevbtn.addEventListener('click', e => {
    const camzSlide = amztrack.querySelector('.org_slide');
    let amzpslide = camzSlide;
    let x=5;
    while(x--){
        amzpslide = amzpslide.previousElementSibling;
    }
    const pamzSlide = amzpslide;
    const pamzIndex = amzslides.findIndex(slide => slide === pamzSlide);
    amzmoveToSlide(amztrack,camzSlide,pamzSlide);
    // crecomSlide.classList.remove('recom_slide');
    // precomSlide.classList.add('recom_slide');
})

amznextbtn.addEventListener('click', e => {
    const camzSlide = amztrack.querySelector('.org_slide');
    
    let amznslide = camzSlide;
    let y=5;
    while(y--){
        amznslide = amznslide.nextElementSibling;
    }
    const namzSlide = amznslide;
    
    const namzIndex = amzslides.findIndex(slide => slide === namzSlide);

    amzmoveToSlide(amztrack,camzSlide,namzSlide);
    // crecomSlide.classList.remove('recom_slide');
    // nrecomSlide.classList.add('recom_slide');
});

// amzslides.forEach( item => item.addEventListener('mouseover',e=>{
//     const initialIndex = amzslides.find(item)
//     console.log(initialIndex)
//     for(let i=initialIndex ; i<amzslides.length ; i++){
//         amzslides[i].style.left += item.getBoundingClientRect.width
//     }
// }))

amzslides.forEach((item, initialIndex) => item.addEventListener('mouseover', (e) => {

    const amzswidth = item.getBoundingClientRect.width;
    for (let i = initialIndex; i < amzslides.length; i++) {
        const slideWidth = item.getBoundingClientRect().width;
        const currentLeft = parseInt(amzslides[i].style.left) || 0;
        amzslides[i].style.left = currentLeft + slideWidth + 'px';
    }
  
}));


