
document.addEventListener("DOMContentLoaded", function(){
  const head = document.head;
  const codeNormal = `    <nav>
    <ul class='grandpa'>
        <li class='dad'>
            <a class='logo son' href='http://worshipthegoose.github.io' title='Back to the homepage.'>The Goose Site</a>
        </li>
        <li class="dad">
            <a class="son" title="Play Goose Games..." href="https://worshipthegoose.github.io/interactives">Interactives</a>
        </li>
        <li class='dad'>
            <a class='son' title='The trinity slideshows...' href='https://worshipthegoose.github.io/powerpoint'>Slideshows</a>
        </li>
        <li style="cursor:pointer;" class="dad dropdown">
            <a class="son" title="The unity videos...">Videos</a>
            <ul class="dropdown-content">
                <li class="space"><a title="Subscribe or die..." href="https://worshipthegoose.github.io/youtube">Youtube Channel</a></li>
                <li><a title="Worship, pray, and repent..." href="https://worshipthegoose.github.io/videos">Unity Video Collection</a></li>
            </ul>
        </li>
        <li class='dad'>
            <a class='son' title='Read the Goose Bible...' href='https://worshipthegoose.github.io/bible'>Bible</a>
        </li>
    </ul>
    </nav>
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
            <h1 class="f1">The Goose Site</h1>
      <p><i>"May the goose be with you..." - St. Duck, 32 CE</i></p>
      <div class="login-div">
      <ul class="login-ul">
        <li class="login-li">
          <a class="login-a" href="https://worshipthegoose.github.io/pages/welcome">Home</a>
        </li>
        <li class="login-li">
          <a class="login-a" href="https://worshipthegoose.github.io/pages/notice">Notice</a>
        </li>
        <li class="login-li">
          <a class="login-a" href="https://worshipthegoose.github.io/pages/changelog">Release Notes</a>
        </li>
        <li class="login-li">
          <a class="login-a" href="mailto:worshiptheholygoose@gmail.com">Contact Us</a>
        </li>
      </ul>
        
      </div>
    </nav>
    <main>
        <div class='welcome' style='text-align:center !important;'>
            <img src='https://u.cubeupload.com/coolsnake0008/57185294148a9c54d5ef.jpg' style='border-radius:15px;width:168px;height:154px;'>
            <h1 style='-webkit-text-stroke:1px black;color:green'>Whoops! 404.</h1>
            <p>This page does not exist. Redirecting you to the home page...</p>
        </div>
    </main>
    <footer>
        <h1 class='f1'>The Goose Site</h1>
    </footer>
  `;
  function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
  }
  
  // 2. If the cookie 'site_access' isn't exactly 'granted', kick them out
  if (getCookie('site_access') === 'granted') {
    document.body.innerHTML = codeNormal;
    head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="https://worshipthegoose.github.io/cursor.css" />`);
    
  } else {
    document.body.innerHTML = codeNSI;
    head.insertAdjacentHTML('beforeend', `<link rel="icon" type="image/x-icon" href="https://worshipthegoose.github.io/favicon.ico">`);
  }
});
