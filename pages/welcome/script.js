const key = 5;
const range = 26;
const aCode = 65;
const zCode = aCode + range;

function tokenReadEnc(str, shift) {
    // Handle shifts larger than 26 or negative shifts
    const normalizedShift = ((shift % 26) + 26) % 26;
    
    return str.split('').map(char => {
        const code = char.charCodeAt(0);
        
        // Uppercase letters (A-Z: 65-90)
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
        }
        
        // Lowercase letters (a-z: 97-122)
        if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
        }
        
        // Return punctuation, spaces, and numbers unmodified
        return char;
    }).join('');
}
console.log(tokenReadEnc("theholysaintduck", 7))
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

    if (tokenReadEnc(currentText, 7) === token) { 
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
