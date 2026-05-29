document.addEventListener("DOMContentLoaded", function(){
  const password = "theholysaintduck";
  const eye = document.querySelector(".eye");
  const inputbox = document.getElementById("inputbox");
  const indicator = document.getElementById("update");
  inputbox.addEventListener('input', function() {
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
    eye.src = eye.getAttribute('src') === 'icons/on.png' ? 'icons/off.png' : 'icons/on.png';
    inputbox.setAttribute('type', type);
    
  });
});
