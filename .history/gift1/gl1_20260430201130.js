// Locate the slider element that we want to tilt
const slider = document.querySelector('.slider');

// Pause rotation when mouse enters
slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
});

// Resume rotation when mouse leaves
slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
});