const key = 5;
const range = 26;
const aCode = 65;
const zCode = aCode + range;

function tokenReadEnc(str, shift) {
  // Handle shifts larger than 26 or negative shifts
  const normalizedShift = ((shift % 26) + 26) % 26;

  return str
    .split('')
    .map(char => {
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
    })
    .join('');
}

function openSesame() {
  const container = document.querySelector(".input-container");
  container.style.display = "none";
  container.remove();


  const code2Import = `
    <center>
      <button id="generateBtn">Generate!</button><br>
      <p id="linkContainer"></p>
    </center>
  `;

  const hello = document.querySelector(".hello");
  if (hello) {
    hello.insertAdjacentHTML("beforeend", code2Import);
    // Add Event Listener
    document.querySelector('#generateBtn').addEventListener('click', () => {
      // 1. Generate a random string token
      const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
      
      // 2. Set expiration time to 10 minutes from now (in milliseconds)
      const expiresIn = 10 * 60 * 1000; 
      const expiryTime = Date.now() + expiresIn;

      // 3. Store the token and expiry date in localStorage
      const tokenData = {
          expiry: expiryTime,
          used: false
      };
      localStorage.setItem(`token_${token}`, JSON.stringify(tokenData));

      // 4. Create the URL pointing to target.html with the search param
      const accessUrl = `${window.location.origin}/?access_token=${token}`;
      
      // Display the link
      const linkContainer = document.getElementById('linkContainer');
      linkContainer.innerHTML = `<a href="${accessUrl}" target="_blank">${accessUrl}</a> (Expires in 10 minutes)`;
    });
  }
}

// 3. Main Login and Input Management
document.addEventListener("DOMContentLoaded", function () {
  const token = "zhpuazdhuznyhukzvu";
  const eye = document.querySelector(".eye");
  const inputbox = document.getElementById("inputbox");
  const indicator = document.getElementById("update");
  const ex = document.querySelector("#clear");


  if (!inputbox || !eye || !ex || !indicator) return;

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
        openSesame();
      }, 300);
      ex.style.display = "none";
    } else {
      indicator.textContent = "✘";
      indicator.className = "indicator incorrect";
      ex.style.display = "inline-block";
    }
  });

  // Wipe input box when 'X' is clicked
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

    if (isPassword) {
      eye.src = 'https://thegoosesite.github.io/pages/welcome/icons/eye-close-up.png';
      eye.title = 'Hide Password';
    } else {
      eye.src = 'https://thegoosesite.github.io/pages/welcome/icons/eyebrow.png';
      eye.title = 'Show Password';
    }
  });
});