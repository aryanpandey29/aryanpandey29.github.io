document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var username = document.querySelector('input[name="username"]').value;
    var passwordInput = document.querySelector('input[name="password"]');
    var password = passwordInput.value;
    var errorMessage = document.getElementById('error-message');
    
    if (username === 'admin' && password === '123') {
        window.location.href = 'smart_monitoring 2.html';
    } else {
        errorMessage.textContent = 'Incorrect username or password. Please try again.';
        errorMessage.style.color = 'red'; // Add red color to the error message
    }
});

// Add event listener to show/hide password
var passwordToggle = document.querySelector('.password-toggle');
var passwordInput = document.querySelector('input[name="password"]');

passwordToggle.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Show the password
    } else {
        passwordInput.type = 'password'; // Hide the password
    }
});