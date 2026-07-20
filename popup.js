document.querySelector("#appOpener").addEventListener('click', () => {
  // 1. Fixed the URL protocol and changed semicolons to commas
  const popup = window.open('https://thegoosesite.github.io?appopen', 'popup', 'popup=true,width=600,height=400');
  
  // 2. Hide the body content visually instead of destroying the JS environment
  document.body.style.opacity = "0"; 
  document.body.style.pointerEvents = "none"; // Prevents further clicks

  const checkClosed = setInterval(() => {
    // 3. Added a safety check to ensure the popup object exists
    if (!popup || popup.closed) {
        clearInterval(checkClosed);
        console.log('Popup window is closed. Reloading ammo');
        window.location.reload();
    }
  }, 500); 
});
