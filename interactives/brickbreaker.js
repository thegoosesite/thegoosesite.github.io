document.addEventListener("DOMContentLoaded",function(){
    const canvas = document.querySelector(".BBcanvas");
    // New tactic that I only just learned
    if (canvas) {
        const ctx = canvas.getContext("2d");
        
        // Set exact physical dimensions
        canvas.width = 480;
        canvas.height = 320;

        // Image Setup
        const background = new Image();
        background.src = 'https://worshipthegoose.github.io/assets/images/BBbackground.png';

        const ballImage = new Image();
        ballImage.src = 'https://worshipthegoose.github.io/assets/images/BBball.png';

        // Get UI elements safely
        const scoreText = document.querySelector(".BBgooscore");
        const livesText = document.querySelector(".BBlives");
        const restartButton = document.querySelector(".BBrestart");
        const statis = document.querySelector(".BBstatus");

        // Exact center coordinates of the canvas for start text
        const centerX = 142;
        const centerY = 155;

        // Set initial text style
        ctx.font = "bold 30px 'Courier New'";
        ctx.fillStyle = "white";

        // Fallback: draw "Press start." immediately so canvas isn't dead black
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.fillText("Press start.", centerX, centerY);

        // If background image loads successfully, draw it
        background.onload = function() {
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "white";
            ctx.fillText("Press start.", centerX, centerY);
        };

        // Global Game State Variables
        let ball = {
            radius: 10,
            x: canvas.width / 2,
            y: canvas.height - 50,
            speed: 5,
            dx: 0, 
            dy: 0
        };

        let paddle = {
            width: 75,
            height: 10,
            x: (canvas.width - 75) / 2,
            y: canvas.height - 20
        };

        let bricks = [];
        const rowCount = 3;
        const colCount = 6;
        const offsetTop = 30;
        const offsetLeft = 15;
        let lives;
        let score;
        let numBricks;
        let gameInterval = null;

        let rightPressed = false;
        let leftPressed = false;

        // Setup Event Listeners
        if (restartButton) {
            restartButton.onclick = initialize;
        }
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);

        // Initialize/Restart game parameters
        function initialize() {
            clearInterval(gameInterval);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (statis) statis.innerText = "Playing...";
            if (restartButton) restartButton.textContent = "Restart";

            lives = 3;
            if (livesText) livesText.innerHTML = lives;
            score = 0;
            if (scoreText) scoreText.innerHTML = score;
            numBricks = 0;

            reset();
            ball.dx = 3;
            ball.dy = -4;

            // Populate bricks grid
            const colors = ["gainsboro", "orange", "#333"];
            for (let c = 0; c < colCount; c++) {
                bricks[c] = [];
                for (let r = 0; r < rowCount; r++) {
                    bricks[c][r] = {
                        width: 70,
                        height: 20,
                        padding: 5,
                        x: 0,
                        y: 0,
                        color: colors[r],
                        status: 1
                    };
                    numBricks += 1;
                }
            }

            // Start game loop (approx. 33 FPS)
            gameInterval = setInterval(updateGame, 30);
        }

        function drawBall() {
            const imgX = ball.x - ball.radius;
            const imgY = ball.y - ball.radius;
            const size = ball.radius * 2;
            
            // If ballImage has loaded, draw it. Fallback to blue circle if it hasn't.
            if (ballImage.complete) {
                ctx.drawImage(ballImage, imgX, imgY, size, size);
            } else {
                ctx.beginPath();
                ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
                ctx.fillStyle = "orange";
                ctx.fill();
                ctx.closePath();
            }
        }

        function drawPaddle() {
            ctx.beginPath();
            ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath(); 
        }

        function drawBricks() {
            for (let c = 0; c < colCount; c++) {
                for (let r = 0; r < rowCount; r++) {
                    let brick = bricks[c][r];
                    if (brick.status === 1) {
                        brick.x = (c * (brick.width + brick.padding)) + offsetLeft;
                        brick.y = (r * (brick.height + brick.padding)) + offsetTop;

                        ctx.beginPath();
                        ctx.rect(brick.x, brick.y, brick.width, brick.height);
                        ctx.fillStyle = brick.color;
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            }
        }

        function collision() {
            for (let c = 0; c < colCount; c++) {
                for (let r = 0; r < rowCount; r++) {
                    let brick = bricks[c][r];
                    if (brick.status === 1) {
                        if (ball.x + ball.radius > brick.x && 
                            ball.x - ball.radius < brick.x + brick.width && 
                            ball.y + ball.radius > brick.y && 
                            ball.y - ball.radius < brick.y + brick.height) {
                            
                            ball.dy *= -1;
                            brick.status = 0;
                            score += 1;
                            if (scoreText) scoreText.innerHTML = score;
                            numBricks -= 1;
                            
                            if (numBricks === 0) {
                                if (statis) statis.innerText = "You won!";
                                if (restartButton) restartButton.textContent = "Restart";
                                clearInterval(gameInterval);
                            }
                        }
                    }
                }
            }
        }

        function reset() {
            ball.x = canvas.width / 2;
            ball.y = canvas.height - 50;
            ball.dx = 3;
            ball.dy = -4;

            paddle.x = (canvas.width - paddle.width) / 2;
            paddle.y = canvas.height - paddle.height * 2;
        }

        function keyDownHandler(e) {
            if (e.keyCode === 39) {
                rightPressed = true;
            } else if (e.keyCode === 37) {
                leftPressed = true;
            }
        }

        function keyUpHandler(e) {
            if (e.keyCode === 39) {
                rightPressed = false;
            } else if (e.keyCode === 37) {
                leftPressed = false;
            }
        }

        function updateGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw background image if complete, or fallback to black
            if (background.complete) {
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            } else {
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            drawBricks();
            drawBall();
            drawPaddle();

            // Left and Right wall bounces
            if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius){
                ball.dx *= -1;
            }
            
            // Top wall bounce
            if (ball.y + ball.dy < ball.radius){
                ball.dy *= -1;
            } 
            // Bottom bounds (Paddle contact / Lose life)
            else if (ball.y + ball.dy > paddle.y - ball.radius) {
                if (ball.x + ball.radius > paddle.x && ball.x - ball.radius < paddle.x + paddle.width){
                    let angle = (Math.PI / 2) * (paddle.x + (paddle.width / 2) - ball.x) / (paddle.width / 2);
                    ball.dx = -1 * (Math.sin(angle) * ball.speed);
                    ball.dy = -1 * (Math.cos(angle) * ball.speed);
                } else {
                    lives -= 1;
                    if (livesText) livesText.innerHTML = lives;
                    if (lives < 1){
                        if (statis) statis.innerText = "Game Over";
                        if (restartButton) restartButton.textContent = "Restart";
                        clearInterval(gameInterval);
                    } else {
                        reset();
                    }
                }
            }

            // Paddle Movement
            if (rightPressed && paddle.x < canvas.width - paddle.width){
                paddle.x += 7;
            } else if (leftPressed && paddle.x > 0){
                paddle.x -= 7;
            }

            // Apply physical movements
            ball.x += ball.dx;
            ball.y += ball.dy;

            collision();
        }
    }
});