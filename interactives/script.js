document.addEventListener('DOMContentLoaded', () => {
    // Start program and gooseify
    console.log("The goose is waiting... Javascript successful");
    // Get constant variables
    /// General
    const head = document.head
    /// Brick breaker
    //// Variables
    let BBplayed = false;
    const BBcontent = document.querySelector(".BBcontent");
    const BBbutton = document.querySelector(".BBplay");
    //// Code that we will slide in...
    const BBcode = `<canvas class="BBcanvas"></canvas><table class="BBtable"><tr><td><div>Score:</div><div class="BBgooscore">0</div></td><td><div>Lives:</div><div class="BBlives">0</div></td><td><button class="BBrestart">Restart</button></td></tr></table><p class="BBstatus"></p>` // Lol BBcode
    // Detect for game(s) starting
    /// Brick breaker
    BBbutton.addEventListener('click', function(){
        if (BBplayed === false){
            BBcontent.insertAdjacentHTML('beforeend', BBcode);
            head.insertAdjacentHTML('beforeend', `<script class = "BBjs" src="./brickbreaker.js"></script>`)
            BBbutton.textContent = "Collapse";
        }else{
            BBcontent.innerHTML = "";
            if (document.querySelector(".BBjs")){this.remove()};
            BBbutton.textContent = "Play";
        }
    })
});