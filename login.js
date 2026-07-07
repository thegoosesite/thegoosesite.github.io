document.addEventListener("DOMContentLoaded", function(){
  // const IECheck =  !!document.documentMode (didn't work)
  function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
  }
  
        // 2. If the cookie 'site_access' isn't exactly 'granted' OR not in IE, kick them out 
  if (getCookie('site_access') !== 'granted') {
    // 3. Redirect user to '/pages/welcome' to sign in with either a one-time code or the master password.
    window.location.href = 'https://worshipthegoose.github.io/pages/welcome/'; 
  } 
});
