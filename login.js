// Global scope popup toggle
function togglePopup(show) {
  const overlay = document.getElementById('popupOverlay');
  const popup = document.getElementById('bottomPopup');
  
  if (!overlay || !popup) return;
  
  if (show) {
    overlay.classList.add('active');
    popup.classList.add('active');
  } else {
    overlay.classList.remove('active');
    popup.classList.remove('active');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const loginPage = 'https://thegoosesite.github.io/pages/welcome/';

  function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  // 1. Skip checks if already on the welcome page (checked via pathname)
  if (window.location.pathname.endsWith('/pages/welcome/')) return;

  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('access_token');
  const hasAccessCookie = getCookie('site_access') === 'granted';

  // 2. Handle Access Verification
  if (!hasAccessCookie) {
    if (token) {
      verifyToken(token);
    } else {
      // No cookie and no token -> redirect to welcome
      window.location.replace(loginPage);
      return;
    }
  }

  // 3. Handle 'servermove' Banner Notice
  if (urlParams.has('servermove')) {
    injectAndShowBanner(`
      <div class="popup-overlay" id="popupOverlay" onclick="togglePopup(false)"></div>
      <div class="bottom-popup" id="bottomPopup">
        <div class="popup-content">
          <button class="close-btn" onclick="togglePopup(false)">&times;</button>
          <h2>🪿 Important GOOSE reminder 🪿</h2>
          <h4>We have recently moved our website domain name.</h4>
          <p>Our developers moved The Goose Site from "worshipthegoose.github.io" to "thegoosesite.github.io".</p>
          <p>We believe this will help gooselings find our site easier.</p>
          <center><button class='ok-btn-popup' onclick='togglePopup(false)'>Goose.</button></center>
        </div>
      </div>
    `);
  }

  // Verification Function
  function verifyToken(tokenVal) {
    const rawData = localStorage.getItem(`token_${tokenVal}`);
    
    if (!rawData) {
      console.warn(`Token "token_${tokenVal}" not found in localStorage.`);
      window.location.replace(loginPage);
      return;
    }

    const tokenData = JSON.parse(rawData);

    if (Date.now() > tokenData.expiry) {
      console.warn(`Token "token_${tokenVal}" has expired.`);
      localStorage.removeItem(`token_${tokenVal}`);
      window.location.replace(loginPage);
      return;
    }

    // Grant Access & Clean Up
    document.cookie = "site_access=granted; Max-Age=600; SameSite=Strict; path=/;";
    localStorage.removeItem(`token_${tokenVal}`);

    // Clean query parameters from URL without reloading
    const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.replaceState({ path: cleanUrl }, '', cleanUrl);

    // Inject and show authorization message
    injectAndShowBanner(`
      <div class="popup-overlay" id="popupOverlay" onclick="togglePopup(false)"></div>
      <div class="bottom-popup" id="bottomPopup">
        <div class="popup-content">
          <button class="close-btn" onclick="togglePopup(false)">&times;</button>
          <h2>A Gooseling Just Authorized Your Visit</h2>
          <p>Your one-time access link has been verified.</p>
          <strong>Access ends in 10 minutes! Better hurry!</strong>
          <center><button class='ok-btn-popup okrev' onclick='togglePopup(false)'>Close Message</button></center>
        </div>
      </div>
    `);
  }

  // Helper to inject HTML and display popup safely
  function injectAndShowBanner(htmlContent) {
    if (document.getElementById('popupOverlay')) return; 
    
    document.body.insertAdjacentHTML('beforeend', htmlContent);
    togglePopup(true);
  }
});