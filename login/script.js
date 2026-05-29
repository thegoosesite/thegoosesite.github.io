document.addEventListener("DOMContentLoaded", function(){
  const password = "theholysaintduck";
  const eye = document.querySelector(".eye");
  const inputbox = document.getElementById("inputbox");
  const indicator = document.getElementById("update");
  inputField.addEventListener('keydown', (event) => {
  // 1. Check if the key is a single letter (a-z or A-Z)
    const isLetter = /^[a-zA-Z]$/.test(event.key);
  
    if (isLetter) {
      console.log(`Letter detected: ${event.key}`);
      // Process the letter (e.g., custom validation or transformation)
      const currentText = inputbox.value;
    if (currentText === ""){
      indicator.textContent = "-";
      indicator.className = "indicator static";
      return;
    } else if (currentText === password) { // It's correct!
      indicator.textContent = "✔";
      indicator.className = "indicator correct";
      setTimeout(() => {
        document.cookie = "site_access=granted; max-age=" + (60 * 60 * 24 * 7) + "; path=/; SameSite=Strict";
        window.location.href = 'https://worshipthegoose.github.io/';
      }, 300);
    } else {
      indicator.textContent = "✘";
      indicator.className = "indicator incorrect";
    }
  });
  eye.addEventListener('click', function () {
    // Toggle the type attribute
    const type = inputbox.getAttribute('type') === 'password' ? 'text' : 'password';
    eye.src = eye.getAttribute('src') === 'icons/eye-close-up.png' ? 'icons/eyebrow.png' : 'icons/eye-close-up.png';
    eye.title = eye.getAttribute('title') === 'Hide Password' ? 'Show Password' : 'Hide Password';
    inputbox.setAttribute('type', type);
    
  });
    } else {
      // Optional: Prevent non-letter keys (excluding control keys like Backspace)
      const isControlKey = event.key.length > 1; // e.g., 'Backspace', 'Enter'
      if (!isControlKey) {
        console.log('Non-letter key blocked');
        event.preventDefault(); 
      }
    }
  });
    
});
