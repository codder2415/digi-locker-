document.getElementById("loginForm")?.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter email and password");
        return;
    }

    alert("Login successful!");

    window.location.href = "dashboard.html";
});
document.getElementById("registerForm")?.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully!");

    window.location.href = "login.html";
});
const savedName = localStorage.getItem("userName");

if (savedName) {

    const userName = document.getElementById("userName");
    const welcomeName = document.getElementById("welcomeName");

    if (userName) {
        userName.textContent = savedName;
    }

    if (welcomeName) {
        welcomeName.textContent = savedName;
    }
}