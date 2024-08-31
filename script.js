function logout() {
    alert('You have been logged out.');
    window.location.href = 'login.html';
}

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login successful!');
    window.location.href = 'index.html';
});

document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Registration successful!');
        window.location.href = 'login.html';
    }
});

function toggleHeart(button) {
    button.classList.toggle('clicked');
}
