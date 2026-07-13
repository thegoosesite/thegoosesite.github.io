document.addEventListener("DOMContentLoaded", function(){
  // const IECheck =  !!document.documentMode (didn't work)
  // You can see above ^^ that I tried to make the IE check
  // If this is confusing, please review "hp-replacement.js"
  function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
  }
  
  // Prevent infinite loop if already on the login page
  const loginPage = 'https://worshipthegoose.github.io/pages/welcome/';
  if (window.location.href === loginPage) return;

  // If the cookie 'site_access' isn't exactly 'granted', kick them out 
  if (getCookie('site_access') !== 'granted') {
    window.location.href = loginPage; 
  } 

});
