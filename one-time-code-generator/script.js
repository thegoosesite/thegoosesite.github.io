document.getElementById('generateBtn').addEventListener('click', () => {
    // 1. Generate a random string token
    const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
    
    // 2. Set expiration time to 10 minutes from now (in milliseconds)
    const expiresIn = 10 * 60 * 1000; 
    const expiryTime = Date.now() + expiresIn;

    // 3. Store the token and expiry date in localStorage
    const tokenData = {
        expiry: expiryTime,
        used: false
    };
    localStorage.setItem(`token_${token}`, JSON.stringify(tokenData));

    // 4. Create the URL pointing to target.html with the search param
    const accessUrl = `${window.location.origin}/?access_token=${token}`;
    
    // Display the link
    const linkContainer = document.getElementById('linkContainer');
    linkContainer.innerHTML = `<a href="${accessUrl}" target="_blank">${accessUrl}</a> (Expires in 10 minutes)`;
});