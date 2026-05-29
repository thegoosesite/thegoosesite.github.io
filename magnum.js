// NOTE: THIS IS NOT RELATED TO CONDOMS OR ADULT CONTENT. THIS IS FOR THE PROTECTION SCRIPT AND I THOUGHT THIS WOULD BE FUNNY
// Modified from durex.js
const codeNormal = `    <nav>
    <ul class='grandpa'>
        <li class='dad'>
            <a class='logo son' href='http://worshipthegoose.github.io' title='Back to the homepage.'>The Goose Site</a>
        </li>
        <li class='dad'>
            <a class='son' title='Sub to @worshiptheholygoose on YT!' href='https://worshipthegoose.github.io/youtube'>Youtube Channel</a>
        </li>
        <li class='dad'>
            <a class='son' title='The trinity slideshows...' href='https://worshipthegoose.github.io/powerpoint'>Slideshows</a>
        </li>
        <li class='dad'>
            <a class='son' title='The unity videos...' href='https://worshipthegoose.github.io/videos'>Videos</a>
        </li>
        <li class='dad'>
            <a class='son' title='Read the Goose Bible...' href='https://worshipthegoose.github.io/bible'><u>Bible</u></a>
        </li>
    </ul>
    </nav><br><br><br><br>
    <main>
        <div class='welcome' style='text-align:center !important;'>
            <img src='https://u.cubeupload.com/coolsnake0008/57185294148a9c54d5ef.jpg' style='border-radius:15px;width:168px;height:154px;'>
            <h1 style='-webkit-text-stroke:1px black;color:green'>404. That isn't goselike</h1>
            <p>404 not found. de gose is redirecting you to the home page.</p>
        </div>
    </main>
    <footer>
        <h1 class='f1'>The Goose Site</h1>
    </footer>`;

const codeNSI = `
      <nav style='background-color:darkorange !important; color:white !important;'>
      <h1 class='f1'>The Goose Site</h1>
    </nav><br><br><br><br>
    <main>
        <div class='welcome' style='text-align:center !important;'>
            <img src='https://u.cubeupload.com/coolsnake0008/57185294148a9c54d5ef.jpg' style='border-radius:15px;width:168px;height:154px;'>
            <h1 style='-webkit-text-stroke:1px black;color:green'>Whoops! Server returned 404 and 401 errors.</h1>
            <p>This page does not exist + you need to sign in. Redirecting you to the login page...</p>
        </div>
    </main>
    <footer>
        <h1 class='f1'>The Goose Site</h1>
    </footer>
  `;

document.addEventListener("DOMContentLoaded", function(){

  function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
  }
  
  // 2. If the cookie 'site_access' isn't exactly 'granted', kick them out
  if (getCookie('site_access') === 'granted') {
    // Add the code
    document.body.innerHTML += codeNormal;
  } else {
    document.body.innerHTML += codeNSI;
  }
});
