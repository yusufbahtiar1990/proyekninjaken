var emailField = document.getElementById("email-field");
var emailError = document.getElementById("email-error");

function validateEmail(){

    if(!emailField.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
        emailError.innerHTML = "Please enter a valid email";
        emailError.style.color = "red";
        
        return false;
    }

    emailError.innerHTML = "email is true";
    emailError.style.color = "green";
    
    return true;
}