document.addEventListener("DOMContentLoaded", () => { // Getting JS Ready
    $(document).ready(async () => { // Getting Jquery Ready
        // Log in console...
        console.log("JS is ready!")
        console.log("Jquery is ready!")
        // A delay function! 
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms)); //
        }
        $("#repent").click(async () => {
            $("smalltext").fadeOut(1000);
            $("#repent").fadeOut(1000);
            await delay(1000);
            $(".aftertext").append("<p>Great! You are now free of your <span class=\"goose\">goos</span>ins!</p>")
        });
    });
});
