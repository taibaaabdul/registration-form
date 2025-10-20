const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateForm() {
    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name cannot be empty";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate Password
    if (passwordInput.value.length < 6) {
        passwordError.textContent =
        "Password must be at least 6 characters";
        isValid = false;
    
    } else {
        passwordError.textContent = "";
    }

    // Enable/Disable submit button
    submitBtn.disabled = !isValid;

    return isValid;
}

// Initial validation on page load
validateForm();

// Prevent form submission and show alert on valid submission
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Form submitted successfully!");
        // Add form submission logic here
    }
});