document.addEventListener("DOMContentLoaded", () => {
  function popupOpen(){
    const popup = window.open('thegoosesite.github.io', 'popup', 'popup=true;width=600,height=400');
    document.querySelector("body").innerHTML = "";
    const checkClosed = setInterval(() => {
      if (popup.closed) {
          clearInterval(checkClosed);
          console.log('Popup window is closed. Reloading ammo');
           window.location.reload();
      }
    }, 500); // Checks every 500ms
  }
});
