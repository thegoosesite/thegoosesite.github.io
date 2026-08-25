document.addEventListener("DOMContentLoaded", function(){
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');

    let currentIndex = 0;

    // Updates the position of the track based on current index
    function updateSlidePosition() {
        const amountToMove = -currentIndex * 100;
        track.style.transform = `translateX(${amountToMove}%)`;
    }

    // Next button event listener
    nextButton.addEventListener('click', () => {
        console.log("NEXT")
        if (currentIndex === slides.length - 1) {
            currentIndex = 0; // Loop back to the first slide
        } else {
            currentIndex++;
        }
        updateSlidePosition();
    });

    // Previous button event listener
    prevButton.addEventListener('click', () => {
        console.log("Prev")
        if (currentIndex === 0) {
            currentIndex = slides.length - 1; // Loop to the last slide
        } else {
            currentIndex--;
        }
        updateSlidePosition();
    });
});
