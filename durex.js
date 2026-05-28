// NOTE: THIS IS NOT RELATED TO CONDOMS OR ADULT CONTENT. THIS IS FOR THE PROTECTION SCRIPT AND I THOUGHT THIS WOULD BE FUNNY
document.addEventListener("DOMContentLoaded", function(){

  function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
  }
  
        // 2. If the cookie 'site_access' isn't exactly 'granted', kick them out
  if (getCookie('site_access') !== 'granted') {
    // Change 'login.html' to the exact URL of your login page if it's hosted elsewhere
    window.location.href = 'https://worshipthegoose.github.io/login/'; 
  }
});
