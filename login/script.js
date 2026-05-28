document.addEventListener("DOMContentLoaded", function(){
  const password = "saintrainbowhairs";
  const inputbox = document.getElementById("inputbox");
  const indicator = document.getElementById("update");
  inputbox.addEventListener('input', function() {
    const currentText = input.value;
    if (currentText === ""){
      indicator.innerText = "";
      indicator.className = "indicator";
      return;
    } elif (currentText === password) { // It's correct!
      statusIndicator.textContent = "✔";
      statusIndicator.className = "indicator correct";
      setTimeout(() => {
        document.cookie = "site_access=granted; max-age=" + (60 * 60 * 24 * 7) + "; path=/; SameSite=Strict";
        window.location.href = 'https://worshipthegoose.github.io/';
      }, 300);
    } else {
      statusIndicator.textContent = "✘";
      statusIndicator.className = "indicator incorrect";
    }
  });
  
});
