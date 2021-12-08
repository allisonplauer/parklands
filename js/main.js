function validate() {
    var email = document.getElementById("email").value;
    var error_message = document.getElementById("error_message");

    var text;
    if(email.length < 5) {
        text = "Please enter your email address."
        error_message.innerHTML = text;
        return false;
    }
    
    return true;
}