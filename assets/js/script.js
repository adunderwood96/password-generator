// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {

    // Array of possible characters
    var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var specialArray = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', ''='', '+'];

    //Start Generating password!

    window.alert("Click Generate Password to start!");

    var pwResult = [];
    var userArray = "";

    // Conditions of Array Questions 

    // Password Length

    if (pwLength < 8 || pwLength > 128) {
        alert("It is recommended for a password to be between 8 to 128 characters long!");
        var pwLength = prompt("What number of character do you want between 8 and 128?");

    }

    // Password Character Contains Conditions:

    else {
        if (confirm("Do you want numbers in your password?")) {

        }

        if (confirm("Do you want Uppercase letters in your password?")) {

        }

        if (confirm("you want lowercase letters in your password?")) {
        }

        if (confirm("you want special characters in your password?"));
    }

    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

    }

    generateBtn.addEventListener("click", writePassword); {
    }