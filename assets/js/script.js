// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {

    // Character Arrays
    var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var lowerAlphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperAlphaArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var specialArray = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '' = '', '+'];

    var newPwd = [];
    var pwdCharacters = [];

    // Generate Password Prompts
    var pwdLength = prompt("How many characters would you like your password to contain?");
    var numbers = confirm("Do you want numbers in your password?");
    var upperAlpha = confirm("Do you want numbers in your password?");
    var lowerAlpha = confirm("you want lowercase letters in your password?")

    // Password Length

    while (pwdLength < 8 || pwdLength > 128) {
        alert("Password must be between 8 to 128 characters in length");
    }
    // Let User know how many characters will be in password
    alert('Your password will contain ${pwdLength} characters');

    // Password Character Contains Conditions:
    if (numbers) {
        pwdCharacters = pwdCharacters.concat(numbersArray);

    }

    if (upperAlpha) {
        pwdCharacters = pwdCharacters.concat(upperAlphaArray);

    }

    if (lowerAlpha) {
        pwdCharacters = pwdCharacters.concat(lowerAlphaArray);

    }

    if (special) {
        pwdCharacters = pwdCharacters.concat(specialArray);

    }

    console.log(newPwd)
    // result
    var newPwd = ""

    for (newPwd i = 0; i < pwdLength = i++); {
        newPwd = newPwd + pwdCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
    }

    return newPwd.join("");

    // Write password
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

    }

    function copyToClipboard() {

    }

generateBtn.addEventListener("click", writePassword);
