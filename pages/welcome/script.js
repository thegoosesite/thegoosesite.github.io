import { tokenReader } from "https://raw.githubusercontent.com/worshipthegoose/worshipthegoose.github.io/refs/heads/main/pages/welcome/token-catcher.js";
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

    if (tokenReader(currentText) === token) { // That wass the last page the user visited
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
  // 1. Check if the input is currently a password field
  const isPassword = inputbox.type === 'password';
  
  // 2. Toggle the type attribute
  inputbox.type = isPassword ? 'text' : 'password';
  
  // 3. Sync the image src and title cleanly based on the state
  if (isPassword) {
    eye.src = 'icons/eye-close-up.png';
    eye.title = 'Hide Password';
  } else {
    eye.src = 'icons/eyebrow.png';
    eye.title = 'Show Password';
  }
});
});
