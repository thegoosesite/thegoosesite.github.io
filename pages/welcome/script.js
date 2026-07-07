import { tokenReader } from "./token-catcher";
document.addEventListener("DOMContentLoaded", function() {
  const token = "lwfsixtstkxfnsyxbfs";
  const eye = document.querySelector(".eye");
  const inputbox = document.getElementById("inputbox");
  const indicator = document.getElementById("update");
  const ex = document.querySelector("#clear");
  inputbox.addEventListener('input', (event) => {
    const currentText = inputbox.value;

    // Handle empty input state safely
    if (currentText === "") {
      indicator.textContent = "-";
      indicator.className = "indicator static";
      ex.style.display = "none";
      return;
    }

    if (tokenReader(currentText) === lastPageVisited) { // That wass the last page the user visited
      indicator.textContent = "✔";
      indicator.className = "indicator correct";
      setTimeout(() => {
        document.cookie = "site_access=granted; max-age=" + (60 * 60 * 24 * 7) + "; path=/; SameSite=Strict";
        window.location.href = 'https://worshipthegoose.github.io/';
      }, 300);
      ex.style.display = "none";
    } else {
      indicator.textContent = "✘";
      indicator.className = "indicator incorrect";
      ex.style.display = "inline-block";
    }
  });

  inputbox.addEventListener('keydown', (event) => {
    const isLetter = /^[a-zA-Z]$/.test(event.key);
    const isControlKey = event.key.length > 1; 

    if (!isLetter && !isControlKey) {
      console.log('Non-letter key blocked');
      event.preventDefault(); 
    }
  });

  eye.addEventListener('click', function () {
    // Toggle the type attribute
    const type = inputbox.getAttribute('type') === 'password' ? 'text' : 'password';
    inputbox.setAttribute('type', type);
    
    // Toggle icon image and title
    eye.src = eye.getAttribute('src') === 'icons/eye-close-up.png' ? 'icons/eyebrow.png' : 'icons/eye-close-up.png';
    eye.title = eye.getAttribute('title') === 'Hide Password' ? 'Show Password' : 'Hide Password';
  });
  ex.addEventListener('click', function () {
    inputbox.value = "";
    inputbox.focus() // Remain clicked in
  });
});
