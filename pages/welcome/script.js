const key = 5;
const range = 26;
const aCode = 65;
const zCode = aCode + range;

function tokenReader(acceptedToken) {
    let NewAcceptedToken = acceptedToken.toUpperCase();
    let resultString = ""; 

    for (let i = 0; i < NewAcceptedToken.length; i++) { 
        let letter = NewAcceptedToken.charCodeAt(i);
        let newLetter = letter;
        
        if (letter >= aCode && letter < zCode) { 
            newLetter += key;
            if (newLetter >= zCode) {
                newLetter -= range;
            }
        }
        resultString += String.fromCharCode(newLetter); 
    }
    return resultString.toLowerCase(); 
}
console.log(tokenReader("lwfsixtstkxfnsyxbfs"))
// 2. Auth Guard Loop Prevention
document.addEventListener("DOMContentLoaded", function() {
  function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
  }
  
  if (getCookie('site_access') === 'granted' && window.location.pathname !== '/') {
    window.location.href = 'https://worshipthegoose.github.io'; 
  }
});

// 3. Main Login and Input Management
document.addEventListener("DOMContentLoaded", function() {
  const token = "lwfsixtstkxfnsyxbfs";
  const eye = document.querySelector(".eye");
  const inputbox = document.getElementById("inputbox");
  const indicator = document.getElementById("update");
  const ex = document.querySelector("#clear");

  if (!inputbox || !eye || !ex) return; 

  inputbox.addEventListener('input', () => {
    const currentText = inputbox.value;

    if (currentText === "") {
      indicator.textContent = "-";
      indicator.className = "indicator static";
      ex.style.display = "none";
      return;
    }

    if (tokenReader(currentText) === token) { 
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

  // FIXED: Added functional click logic to wipe the input box when 'X' is clicked
  ex.addEventListener('click', () => {
    inputbox.value = "";
    indicator.textContent = "-";
    indicator.className = "indicator static";
    ex.style.display = "none";
    inputbox.focus();
  });

  inputbox.addEventListener('keydown', (event) => {
    const isLetter = /^[a-zA-Z]$/.test(event.key);
    const isControlKey = event.key.length > 1; 

    if (!isLetter && !isControlKey) {
      event.preventDefault(); 
    }
  });

  eye.addEventListener('click', function () {
    const isPassword = inputbox.type === 'password';
    inputbox.type = isPassword ? 'text' : 'password';
    
    // FIXED: Synchronized image names with absolute path format
    if (isPassword) {
      eye.src = 'icons/eye-close-up.png';
      eye.title = 'Hide Password';
    } else {
      eye.src = 'icons/eyebrow.png';
      eye.title = 'Show Password';
    }
  });
});
