// Assignment code here
var generateBtn = document.querySelector("#generate");

window.alert("Click Generate Password to start!");

// Character Arrays
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '' = '', '+'];


//Start Generating password!
function generatePassword() {

    // Conditions of Array Questions 

    // Password Length
    while (pwLength <= 8 || pwLength >= 128) {
        alert("Password must be between 8 to 128 characters in length")
        var pwLength = prompt("How many characters would you like your password to contain?"));

    }
    // Let User know how many characters will be in password
    alert('Your password will contain ${pwLength} characters');

    // Password Character Contains Conditions:

    if (confirm("Do you want numbers in your password?")) {
        Array = Array.concat(numbers);

    }

    if (confirm("Do you want Uppercase letters in your password?")) {
        Array = Array.concat(upper);

    }

    if (confirm("you want lowercase letters in your password?")) {
        Array = Array.concat(lower);

    }

    if (confirm("you want special characters in your password?"));
    Array = Array.concat(special);

}
console.log(pwResult)
}
// Write password
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword); {
}