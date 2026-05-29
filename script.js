document.addEventListener("DOMContentLoaded", () => { // Getting JS Ready
    $(document).ready(async () => { // Getting Jquery Ready
        // Log in console...
        console.log("JS is ready!")
        console.log("Jquery is ready!")
        // Necessary goosounds
        const goosound1 = new Audio("https://worshipthegoose.github.io/holy.mp3");
        const goosound2 = new Audio("https://worshipthegoose.github.io/Win.mp3");
        // A delay function! 
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms)); //
        }
        $("#repent").click(async () => {
            goosound2.play(); 
            goosound2.pause();
            goosound2.currentTime = 0;
            $("smalltext").fadeOut(1000);
            $("#repent").fadeOut(1000);
            await delay(1000);
            $(".aftertext").append("<p>Great! You are now free of your <span class=\"goose\">goos</span>ins!</p>");
            goosound2.play();
        });
        $(".youtube").click(async () => {
            window.location.href = "https://worshipthegoose.github.io/youtube";
        });
        $(".slides").click(async () => {
            window.location.href = "https://worshipthegoose.github.io/powerpoint";
        });
        $('.worshipper').on('click', function() {
          goosound1.play();
        });
        $('.goose').on('click', function() {
          goosound1.play();
        });
    });
});
