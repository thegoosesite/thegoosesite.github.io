// Decided to go with the condom theme here...
document.addEventListener("DOMContentLoaded", () => {
  const logout = document.getElementById("logout");
  const videos = document.querySelector("")
  logout.addEventListener("click", function(){
    document.cookie = "site_access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict"; // Expire cookie
    // Clear cache..
    window.localStorage.clear();
    window.sessionStorage.clear();
    // Refresh HARD!
    window.location.reload(true);
  });
  // Videos dropdown
});
