// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");
var copyToClipBoardButton = document.getElementById("copytoclipboard");


// Character Arrays
var numbersArray = /[0-9]/g;
var lowerAlphaArray = /[a-z]/g;
var upperAlphaArray = /[A-Z]/g;
var specialArray = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '' = '', '+'];

var pwdCharacters = [];


// Prompts for Password
function generatePassword() {

  // Loop if length does not meet requirements
  while(pwdLength <= 8 || pwdLength >= 128); {
    var pwdLength = prompt("How many characters would you like your password to contain?");
  }

  // Let User know how many characters will be in password
  alert(`Your password will contain ${pwdLength} characters`);

  // Password Character Contains Conditions:
  if(numbers) {
    var numbers = confirm("Click OK if you would like numbers in your password");
    pwdCharacters = pwdCharacters.concat(numbersArray);

  }

  if(upperAlpha) {
    var upperAlpha = confirm("Click OK if you would like uppercase letters in your password");
    pwdCharacters = pwdCharacters.concat(upperAlphaArray);

  }

  if(lowerAlpha) {
    var lowerAlpha = confirm("Click OK if you would like lowercase letters in your password");
    pwdCharacters = pwdCharacters.concat(lowerAlphaArray);

  }

  if(special) {
    var special = confirm("Click OK if you would like special characters, such as '!@#$^&*-_=+' in your password");
    pwdCharacters = pwdCharacters.concat(specialArray);
  }
  console.log(pwdCharacters)

var = newPwd = [];
for (var i = 0; i < confirmLength; i++) {
    newPwd = newPwd + pwdCharacters.push[Math.floor(Math.random() * pwdCharacters.length)];
    console.log(newPwd)
  }

  return newPwd.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function copyToClipboard() {
  document.getElementById("display").select();

  document.execCommand("Copy");

  alert("Your password has now been copied to the clipboard");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);