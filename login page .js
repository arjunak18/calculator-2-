document.addEventListener('DOMContentLoaded', () => {
    const passwordToggleButton = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    const icon = passwordToggleButton.querySelector('i');
console.log("i am the 1 event lisenter and all the initailising shits");
    // Disable the custom toggle button if native support is detected
    if (supportsNativePasswordToggle()) {
        passwordToggleButton.style.display = 'none';
        console.log("i am the toggle desabler");
    }

    // Add a single click event listener
    passwordToggleButton.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text'; // Show password
            icon.classList.remove('fa-eye'); // Remove "eye" icon
            icon.classList.add('fa-eye-slash'); // Add "eye-slash" icon
            console.log("i am the password to text converter");
        } else {
            passwordInput.type = 'password'; // Hide password
            icon.classList.remove('fa-eye-slash'); // Remove "eye-slash" icon
            icon.classList.add('fa-eye'); // Add "eye" icon
            console.log("i am the text to password converter");
        }
    });
});

// Native toggle detection
function supportsNativePasswordToggle() {
    const userAgent = navigator.userAgent;

    // Detect Microsoft Edge
    if (/Edg/.test(userAgent)) {
        console.log("i am the user agent check for edge");
        return true;
        
    }

    // Detect Safari (macOS or iOS)
    if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
        console.log("i am the user agent check for safari");
        return true;
    }

    return false;
}
