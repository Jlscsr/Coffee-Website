const section2 = document.querySelector('.section-2');
const section3 = document.querySelector('.section-3');
const section4 = document.querySelector('.section-4');

window.addEventListener('scroll', () => {
    let windowHeight = window.innerHeight;
    let scrollSection2 = Math.ceil(section2.getBoundingClientRect().top);
    let scrollSection3 = Math.ceil(section3.getBoundingClientRect().top);
    let scrollSection4 = Math.ceil(section4.getBoundingClientRect().top);
    
    scrollSection2 < 679 ? section2.classList.add('active') : section2.classList.remove('active');
    scrollSection3 < 504 ? section3.classList.add('active') : section3.classList.remove('active');
    scrollSection4 < 590 ? section4.classList.add('active') : section4.classList.remove('active');
    console.log(windowHeight);
});