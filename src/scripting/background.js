document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "https://media.istockphoto.com/id/1035037940/photo/white-geese-under-an-apple-tree.jpg",
    "https://base-prod.rspb-prod.magnolia-platform.com/.imaging/focalpoint/landscape16to9/_WIDTH_x_HEIGHT_/dam/jcr:5e1536b4-18ab-48d9-9186-9c2559355e95/1443489677-Species-Canada-Goose-flying-over-water.jpg",
    "https://images.pexels.com/photos/29902101/pexels-photo-29902101/free-photo-of-majestic-white-goose-spreading-its-wings-by-the-lake.jpeg",
    "https://media.istockphoto.com/id/2163495556/photo/close-up-of-white-geese-walking-and-grazing-on-meadow-of-swiss-town.jpg",
    "https://www.ndow.org/wp-content/uploads/2021/10/branta_canadensis-992x662.jpeg",
    "https://cdn.britannica.com/10/183410-050-6CDBCF6E/Domestic-goose.jpg",
    "https://www.allaboutbirds.org/guide/assets/photo/59953191-480px.jpg"
  ];

  let section = document.createElement("section");
  section.id = "slide-storer";
  document.body.appendChild(section);

  let sectionAfter = document.getElementById("slide-storer");

  // Create all slides WITHOUT the 'active' class upfront
  for (let i = 0; i < images.length; i++) {
    let string = `<div class="bg-slide" style="background-image: url('${images[i]}');"></div>`;
    sectionAfter.insertAdjacentHTML("beforeend", string);
  }

  const slides = document.querySelectorAll(".bg-slide");
  let currentIndex = 0;

  // Trigger 'active' after render frame so the CSS transition animates the first slide
  if (slides.length > 0) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        slides[0].classList.add("active");
      });
    });
  }

  function nextSlide() {
    if (slides.length === 0) return;
    const current = slides[currentIndex];

    currentIndex = (currentIndex + 1) % slides.length;
    const next = slides[currentIndex];

    next.style.transition = "none";
    next.classList.remove("active");

    next.offsetHeight; // Force DOM reflow

    next.style.transition = "";
    next.classList.add("active");

    setTimeout(() => {
      current.classList.remove("active");
    }, 1000);
  }

  setInterval(nextSlide, 5000);
});


document.addEventListener("DOMContentLoaded", function(){
    const goose = document.querySelector("nav section ul li .div img");
    const audioLocation = "/src/audio/goose.wav";
    const audioPlayer = new Audio(audioLocation);
    
    if (goose) {
      goose.addEventListener('click', function(){
        audioPlayer.play().catch(err => console.log("Audio playback blocked until user interaction."));
        goose.classList.add('spin-active');
      });
      goose.addEventListener('animationend', function(){
        goose.classList.remove('spin-active');
      });
    }
});

document.addEventListener("DOMContentLoaded", function(){
  let cycle = true;
  const targetPhrases = ["indi", "gose"];
  const maxBufferLength = 20; 
  let inputBuffer = "";

  window.sayChez = function() {
      const html = document.querySelector('article');
      if (!html) return;
      const degree = cycle ? 180 : 0;
      cycle = !cycle;
      html.style.transformOrigin = "center center";
      html.style.transition = "transform 0.5s ease";
      html.style.transform = `rotate(${degree}deg)`;
  };

  window.addEventListener("keydown", (event) => {
    if (event.key.length > 1) return; 

    inputBuffer += event.key.toLowerCase();

    if (inputBuffer.length > maxBufferLength) {
      inputBuffer = inputBuffer.slice(-maxBufferLength);
    }

    const matched = targetPhrases.some(phrase => inputBuffer.includes(phrase));

    if (matched) {
      if (typeof window.sayChez === "function") {
        console.log("Success!");
        window.sayChez();
      } else {
        console.warn("Cheat code detected, but sayChez() is not defined!");
      }
      inputBuffer = ""; 
    }
  });
});

document.addEventListener("DOMContentLoaded", function(){
  const thing = document.querySelector("nav section ul li:nth-child(5) a");
  if (thing) {
    thing.href = "/info/queries";
  }
});

// Iframe shi
document.addEventListener("DOMContentLoaded", function(){
  const secret = document.querySelector("footer ul li:nth-child(3) ul li:nth-child(4) a");
  document.body.insertAdjacentHTML('beforeend', "<iframe class='secret-iframe' src='/secret/index.html'></iframe>");
  if (secret) { 
    secret.addEventListener('click', function(event){
      event.preventDefault();
      const iframe = document.querySelector(".secret-iframe");
      iframe.style.display = "inline-block";
      iframe.contentWindow.postMessage('playAudio', '*');
      
    });
  }
});
