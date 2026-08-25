  document.addEventListener("DOMContentLoaded", function(){
        const bgCode = `<section><div class="bg-slide active" style="background-image: url('https://media.istockphoto.com/id/1035037940/photo/white-geese-under-an-apple-tree.jpg');"></div>
  <div class="bg-slide" style="background-image: url('https://images.pexels.com/photos/29902101/pexels-photo-29902101/free-photo-of-majestic-white-goose-spreading-its-wings-by-the-lake.jpeg');"></div>
  <div class="bg-slide" style="background-image: url('https://media.istockphoto.com/id/2163495556/photo/close-up-of-white-geese-walking-and-grazing-on-meadow-of-swiss-town.jpg');"></div>
  <div class="bg-slide" style="background-image: url('https://www.ndow.org/wp-content/uploads/2021/10/branta_canadensis-992x662.jpeg');"></div></section>`;
  document.body.insertAdjacentHTML('beforeend', bgCode);
      const slides = document.querySelectorAll('.bg-slide');
      let currentIndex = 0;

      function nextSlide() {
        const current = slides[currentIndex];

        // 1. Move to next index
        currentIndex = (currentIndex + 1) % slides.length;
        const next = slides[currentIndex];

        // 2. Reset the NEXT slide's scale instantly before showing it
        next.style.transition = 'none';
        next.classList.remove('active');

        // Force a DOM reflow to apply the reset instantly
        next.offsetHeight; 

        // 3. Re-enable transitions and activate next slide
        next.style.transition = '';
        next.classList.add('active');

        // 4. Fade out the old slide after a tiny delay so it overlaps beautifully
        setTimeout(() => {
          current.classList.remove('active');
        }, 50);
      }
      nextSlide();
      // Run the loop every 5 seconds
      setInterval(nextSlide, 5000);
    });
document.addEventListener("DOMContentLoaded",function(){
    const goose = document.querySelector("nav section ul li .div img");
    const audioLocation = "/src/audio/goose.wav";
    const audioPlayer = new Audio(audioLocation);
    goose.addEventListener('click', function(){
      audioPlayer.play();
      goose.classList.add('spin-active');
    });
    goose.addEventListener('animationend', function(){
      goose.classList.remove('spin-active');
    });
});
document.addEventListener("DOMContentLoaded", function(){
  let cycle = true;
  const targetPhrases = ["indi", "gose"];
  // Keep a larger buffer (e.g., 20 chars) so typing isn't strictly broken by length limits
  const maxBufferLength = 20; 
  let inputBuffer = "";

  window.addEventListener("keydown", (event) => {
    // Ignore functional keys like Shift, Enter, Arrow keys
    if (event.key.length > 1) return; 

    inputBuffer += event.key.toLowerCase();

    // Keep the buffer at a manageable size
    if (inputBuffer.length > maxBufferLength) {
      inputBuffer = inputBuffer.slice(-maxBufferLength);
    }

    // Check if the running buffer contains any of the cheat codes
    const matched = targetPhrases.some(phrase => inputBuffer.includes(phrase));

    if (matched) {
      // Ensure sayChez exists before executing to prevent crashes
      if (typeof sayChez === "function") {
        console.log("Success!")
        sayChez();
      } else {
        console.warn("Cheat code detected, but sayChez() is not defined!");
      }
      inputBuffer = ""; // Reset buffer immediately on success
    }
  });
  function sayChez() {
      const html = document.querySelector('article');
      const degree = cycle ? 180 : 0;
      cycle = !cycle;
      html.style.transformOrigin = "center center";
      html.style.transition = "transform 0.5s ease";
      html.style.transform = `rotate(${degree}deg)`;
  }
});
document.addEventListener("DOMContentLoaded", function(){
  const thing = document.querySelector("nav section ul li:nth-child(5) a");
  thing.href = "/info/queries";
});


