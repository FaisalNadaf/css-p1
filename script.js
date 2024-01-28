// script.js

function register() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username is already taken
    if (localStorage.getItem(username) !== null) {
        alert('Username already taken. Choose another one.');
        return;
    }

    // Save user details to local storage
    localStorage.setItem(username, password);

    alert('Registration successful. You can now log in.');
    window.location.href = 'login.html';
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the entered credentials match the stored data
    if (localStorage.getItem(username) === password) {
        alert('Login successful. Redirecting to the main page.');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
