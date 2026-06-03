const slider = document.querySelector('.slider');
let xValue = 0;

window.addEventListener('mousemove', (e) => {
    // Calculate mouse position relative to center of screen
    // Values range from roughly -0.5 to 0.5
    xValue = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    
    // Rotate based on mouse position (multiplied by 50 for intensity)
    const rotateDegree = xValue * 50;
    
    // Apply the rotation
    slider.style.transform = `perspective(1000px) rotateX(-10deg) rotateY(${rotateDegree}deg)`;
});