// 1. Move togglePopup to the global scope so the HTML inline onclick attributes can find it
function togglePopup(show) {
  const overlay = document.getElementById('popupOverlay');
  const popup = document.getElementById('bottomPopup');
  
  if (!overlay || !popup) return; // Safety check in case elements aren't injected yet
  
  if (show) {
    overlay.classList.add('active');
    popup.classList.add('active');
  } else {
    overlay.classList.remove('active');
    popup.classList.remove('active');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  
  // --- COOKIE & REDIRECT LOGIC ---
  function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
  }
  
  const loginPage = 'https://thegoosesite.github.io/pages/welcome/';
  if (window.location.href === loginPage) return;

  if (getCookie('site_access') !== 'granted') {
    window.location.href = loginPage; 
    return; // Stop executing the rest of the script if redirecting
  } 

  // --- BANNER & POPUP LOGIC ---
  const bannertext = `
    <!-- Dark Background Overlay -->
    <div class="popup-overlay" id="popupOverlay" onclick="togglePopup(false)"></div>

    <!-- The Actual Popup Structure -->
    <div class="bottom-popup" id="bottomPopup">
      <div class="popup-content">
        <button class="close-btn" onclick="togglePopup(false)">&times;</button>
        <h2>Important GOOSE reminder.</h2>
        <h4>We have recently moved our website domain name.</h4>
        <p>Our developers have made an executive decision to move The Goose Site from "worshipthegoose.github.io" to "thegoosesite.github.io"</p>
        <p>We believe this will help gooselings find their way to our site easier since the "worshipthegoose" branding is barely used.</p>
        <p>Thank you,</p>
        <br>
        <p>Goose Site Developers</p>
      </div>
    </div>`;

  const parameters = new URLSearchParams(window.location.search);
  
  if (parameters.has('servermove')) {
    // Fixed: Added 'beforeend' position argument
    document.body.insertAdjacentHTML('beforeend', bannertext);
    togglePopup(true);
  }
});
