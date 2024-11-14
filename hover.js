document.addEventListener('DOMContentLoaded', function () {
    const bannerImage = document.querySelector('.banner-image');

    document.addEventListener('mousemove', function (e) {
        const { innerWidth: width, innerHeight: height } = window;
        const mouseX = (e.clientX / width) - 0.5;  // Range from -0.5 to 0.5
        const mouseY = (e.clientY / height) - 0.5; // Range from -0.5 to 0.5

        // Increased movement factor for a more pronounced effect
        const moveFactorX = -60; // Increase to make the movement more noticeable
        const moveFactorY = -60; // Increase to make the movement more noticeable

        bannerImage.style.transform = `translate(${mouseX * moveFactorX}px, ${mouseY * moveFactorY}px)`;
    });
});

document.querySelectorAll('.gallery-box a').forEach(box => {
    box.addEventListener('click', function() {
        window.location.href = this.href;
    });
});