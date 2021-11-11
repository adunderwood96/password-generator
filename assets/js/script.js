// Assignment code here
var generateBtn = document.querySelector("#generate");

// Start of PW Generator
function generatePassword() {

// Array of possible characters
var numbers = ["0123456789"];
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var special = ["!@#$%^&*()"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];



function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
