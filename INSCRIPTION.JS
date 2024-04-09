document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // You can add your authentication logic here.
        // For this example, we'll just display an alert.
        alert(`Welcome, ${username}!`);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const changePageButton = document.getElementById("star1");

    changePageButton.addEventListener("click", function () {
        // Define the URL of the new page you want to navigate to
        const newPageURL = "http://127.0.0.1:5500/INCSRIPTION.HTML?";
        
        // Use window.location to change the page
        window.location.href = newPageURL;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const changePageButton = document.getElementById("star2");

    changePageButton.addEventListener("click", function () {
        // Define the URL of the new page you want to navigate to
        const newPageURL = "http://127.0.0.1:5500/INCSRIPTION.HTML?";
        
        // Use window.location to change the page
        window.location.href = newPageURL;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const changePageButton = document.getElementById("star3");

    changePageButton.addEventListener("click", function () {
        // Define the URL of the new page you want to navigate to
        const newPageURL = "http://127.0.0.1:5500/INCSRIPTION.HTML?";
        
        // Use window.location to change the page
        window.location.href = newPageURL;
    });
});