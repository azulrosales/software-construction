const password_form = document.getElementById('password-form');
const password = document.getElementById('password');
const password_confirmation = document.getElementById('password-confirmation');
const validation_message = document.getElementById('validation-message');

// Validate that passwords match
password_form.addEventListener('submit', function(event){

    event.preventDefault(); // prevent form from submitting

    // Check if passwords match
    if(password.value !== password_confirmation.value){
        validation_message.innerHTML = 'Passwords do not match';
        validation_message.style.color = 'red';
    } else{
        validation_message.innerHTML = 'Passwords match!';
        validation_message.style.color = 'green';
    }

});


// Password format requirements
const length = document.getElementById('length');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const number = document.getElementById('number');
const format_message = document.getElementById('format-message');

// Format message starts off by not being display
format_message.style.display = 'none';

// When the user clicks on the password field, show the message box
password.onfocus = function(){
    format_message.style.display = 'block';
}

// When the user clicks outside the password field, hide the message box
password.onblur = function(){
    format_message.style.display = 'none';
}

// When the user starts to type something inside the password field, validate the requirements
password.onkeyup = function(){

    // Validate length
    if(password.value.length >= 8){
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else{
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    // Validate lowercase letters
    var lowercase_letters = /[a-z]/g;
    if(password.value.match(lowercase_letters)){  
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.remove("valid");
        lowercase.classList.add("invalid");
    }

    // Validate uppercase letters
    const uppercase_letters = /[A-Z]/g;
    if(password.value.match(uppercase_letters)) {  
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    } else {
        uppercase.classList.remove("valid");
        uppercase.classList.add("invalid");
    }

    // Validate numbers
    const numbers = /[0-9]/g;
    if(password.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
}
