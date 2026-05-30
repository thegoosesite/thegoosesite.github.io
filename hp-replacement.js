// NOTE: THIS IS NOT RELATED TO CONDOMS OR ADULT CONTENT. THIS IS FOR THE PROTECTION SCRIPT AND I THOUGHT THIS WOULD BE FUNNY
document.addEventListener("DOMContentLoaded", function(){
  // const IECheck =  !!document.documentMode (didn't work)
  const body = document.body;
  const head = document.head;
  const headNormal = `<title>The Goose Site</title>
        <!-- <meta> Tags: Allow for basic website function.-->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Legacy support: Some users (that have outdated and/or slower computers may need to access this via IE)-->
        <!-- Condom -->
        <script src="https://worshipthegoose.github.io/durex.js"></script>
        <script src="https://worshipthegoose.github.io/lifestyles.js"></script>
        <!-- Linking to necessary files-->
        <link rel="stylesheet" href="./footer.css" />
        <link rel="stylesheet" href="./styles.css" />
        <link rel="stylesheet" href="./nav.css" />
        <link rel="stylesheet" href="./cursor.css" />
        <script src="./script.js"></script> <!-- Normally, it's better to add this in the <body> tag but I wanted to make things simpler. -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> <!-- Jquery... -->  
        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="./favicon.ico">
        `;
  const htmlNormal = `
        <!-- Header... Sadly there isn't a great way to "snippet" code.-->
        <nav>
            <ul class="grandpa">
                <li class="dad">
                    <a class="logo son"href="http://worshipthegoose.github.io"title="Back to the homepage.">The Goose Site</a>
                </li>
                <li class="dad">
                    <a  class="son" title="Sub to @worshiptheholygoose on YT!" href="https://worshipthegoose.github.io/youtube">Youtube Channel</a>
                </li>
                <li class="dad">
                    <a class="son" title="The trinity slideshows..." href="https://worshipthegoose.github.io/powerpoint">Slideshows</a>
                </li>
                <li class="dad">
                    <a class="son" title="The unity videos..." href="https://worshipthegoose.github.io/videos">Videos</a>
                </li>
                <li class="dad">
                    <a class="son" title="Read the Goose Bible..." href="https://worshipthegoose.github.io/bible">Bible</a>
                </li>
                <li class="dad" id="logout"><a class="son" title="Voids Session Data" onclick="document.cookie = 'site_access=granted; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/;';"><img src="https://worshipthegoose.github.io/signin.png" /><u>Logout</u></a></li>
            </ul>
        </nav>
        <main>
            <div class="hello">
                <center><img id="image" title = "Click me to autorepent" class="worshipper" src="https://worshipthegoose.github.io/frog-goose/goose.png" /></center>
                <h2 class="heading">Hello there. This is the official website of The <span class="goose">Goose</span>.</h2>
                <div class="text-region"><p>Welcome to everybody except Saam! This is the holy <span class="goose">Goose</span> typing! This is your one and only reminder to come to St. Duck's church and worship the one and only holy <span class="goose">Goose</span>. Remember, if you don't worship; bad, bad things will happen. If you are a non worshipper, the only way to repent your <span class="goose">goos</span>ins is by pressing that button right there.</p><br></div>
                <center><button id="repent" title="REPENT!!!">Repent my <span class="goose">goos</span>ins!</button><br>
                <smalltext>By pressing that button, you hereby agree to donate your soul and all of your organs, your family members' souls, your 401k retirement fund, your entire life savings, your house or residency, your pets, your sanity, and your dignity to the holy <span class="goose">Goose</span>. </smalltext></center>
                <div class="aftertext"></div>
            </div>
            <div class="slidevideo">
                <div class="hello format">
                    <h3>The Unity Youtube Channel</h3>
                    <p>The holy <span class="goose">Goose</span> is now live on Youtube! Watch unity videos of the <span class="goose">Gooz</span> everywhere until you die. Don't worry -- we already have your soul!</p>
                    <center><button class="youtube">Pay your mandatory visit to the <span class="goose">Goose</span> channel otherwise you are damned. -></button></center>
                </div>
                <div class="hello format">
                    <h3>The Trinity Slideshows</h3>
                    <p>Worship, pray, and repent with the trinity <span class="goose">Goose</span> slideshows. Enjoy a breath of <span class="goose">goos</span>heaven. Thou shall not complain if they do not want Saam's fate. (being damned)</p>
                    <center><button class="slides">Pray with the trinity <span class="goose">Goose</span> slides to go to <span class="goose">goos</span>heaven... -></button></center>
                </div>
            </div>
            <div class="hello">
                <center><img style="border-radius:10px;" title = "Saint Rainbowhairs" src="https://worshipthegoose.github.io/frog-goose/dancing-monster.png" /></center>
                <h1 class="heading" style="-webkit-text-stroke:1px black;background-clip: text;-webkit-background-clip: text;color:transparent;-webkit-text-fill-color: transparent;background-image:linear-gradient(to left, red, blue)">Saint Rainbowhairs</span></h1>
                <p>This is Saint Rainbowhairs, known colloqiually as the Dancing Monster.</p>
                <p>Click the button below to learn more about him.</p><br>
                <center><button class="izzo" onclick="window.location.href='https://worshipthegoose.github.io/saint-rainbowhairs'" style="font-family:'Comic Sans MS' !important; color:white !important;background-image: linear-gradient(to left, red, blue);border:0px;border-radius:10px;padding:10px;">View full page...</button></center>
            </div>
        </main>
        <footer>
            <h1 class="f1">The Goose Site</h1>
        </footer>
    </body>`;
  const headNSI = `    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://worshipthegoose.github.io/nav.css">
    <link rel="stylesheet" href="https://worshipthegoose.github.io/signout-nav.css"> <!-- Only for logged out pages -->
    <link rel="stylesheet" href="https://worshipthegoose.github.io/footer.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://worshipthegoose.github.io/login/styles.css">
    <link rel="stylesheet" href="https://worshipthegoose.github.io/styles.css">
    <link rel="icon" type="image/x-icon" href="https://worshipthegoose.github.io/favicon.ico">
    <script src="https://worshipthegoose.github.io/login/script.js"></script>
    <script src="https://worshipthegoose.github.io/login/skyn.js"></script>
    <title>Please Login - The Goose Site</title>`;
  const htmlNSI = `
    <nav style="background-color:darkorange !important; color:white !important;">
      <h1 class="f1">The Goose Site</h1>
      <p>"May the goose be with you..." - St. Duck, 32 CE</p>
      <div class="login-div">
      <ul class="login-ul">
        <li class="login-li">
          <a class="login-a" href="https://worshipthegoose.github.io/login" style="font-weight:bolder !important">Login</a>
        </li>
        <li class="login-li">
          <a class="login-a" href="https://worshipthegoose.github.io/pages/terms">Legal</a>
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
        <div class="hello">
            <center><img title = "I will not give you the passcode..." style="border-radius:10px;" src="https://worshipthegoose.github.io/frog-goose/login.png" /></center>
            <h1 style="-webkit-text-stroke:1px black;color:darkgreen !important;-webkit-text-stroke:1px white;" title="Login Thank You...">Please Login</h1>
            <p>In order to keep our site secure (from Saam), this site is password-protected.</p>
            <p>We simply ask you to verify that you are a gooseling by entering the holy password.</p>
            <p>Only gooselings know the holy password. If you somehow don't know, please politely email <a href="mailto:worshiptheholygoose@gmail.com">worshiptheholygoose@gmail.com</a></p>
            <div class="input-container">
            <div class="input-stuff"><input style="position:relative !important" type="password" autocomplete="off" readonly onfocus="this.removeAttribute('readonly');" onblur="this.setAttribute('readonly', true);" placeholder="Please input the holy password..." id="inputbox" class="inputbox" title="Input the passcode..."><button type="button" style="display: none;" id="clear" class="inputex">&times;</button></div>
            <p id="update" style="color:silver;" class="update">-</p>
            <img title="Show Password" class="eye" src="https://worshipthegoose.github.io/login/icons/eyebrow.png"></img>
            </div>
            <p style="font-size:12px !important"><u>Password does not contain numbers, symbols, or spaces and are therefore nontypable.</u><br>Secret custom cursors and the navigation bar are also hidden during this period.<br>In progress pages may be accessible with links.</p>
        </div>
    </main>
    <footer>
        <h1 class="f1">The Goose Site</h1>
    </footer>
`;
  function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
  }
  
        // 2. If the cookie 'site_access' isn't exactly 'granted' OR not in IE, kick them out 
  if (getCookie('site_access') !== 'granted') {
    body.innerHTML = htmlNSI; // Not signed in
    head.innerHTML = headNSI;
  } else {
    body.innerHTML = htmlNormal;
    head.innerHTML = headNormal;
  }
});
