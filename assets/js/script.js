// Assignment code here

var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// Character Arrays
var numbersArray = /[0-9]/g;
var lowerAlphaArray = /[a-z]/g;
var upperAlphaArray = /[A-Z]/g;
var specialArray = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '' = '', '+'];

var pwdCharacters = "";

// Prompts for Password
function generatePassword() {
  console.log("btn was clicked")
  // Loop if length does not meet requirements
  var pwdLength = prompt("How many characters would you like your password to contain?");
  while (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
    alert("Password must be between 8 to 128 characters iin length!")
  };

  // Let User know how many characters will be in password
  alert(`Your password will contain ${pwdLength} characters`);

  // Password Character Contains Conditions:
  if (numbers) {
    var numbers = confirm("Click OK if you would like numbers in your password");
    pwdCharacters += numbersArray;

  };

  if (upperAlpha) {
    var upperAlpha = confirm("Click OK if you would like uppercase letters in your password");
    pwdCharacters += upperAlphaArray;

  };

  if (lowerAlpha) {
    var lowerAlpha = confirm("Click OK if you would like lowercase letters in your password");
    pwdCharacters += lowerAlphaArray

  };

  if (special) {
    var special = confirm("Click OK if you would like special characters, such as '!@#$^&*-_=+' in your password");
    pwdCharacters += specialArray

  };
  // console.log("pwdCharacters worked")

  if (
    numbers === false &&
    upperAlpha === false &&
    lowerAlpha === false &&
    special === false
  ) {
    generatePassword();
  }
}

  var newPwd = "";
  for (var i = 0; i < confirmLength; i++) {
    newPwd += pwdCharacters.charAt[Math.floor(Math.random() * pwdCharacters.length)];
    console.log(newPwd)
  }

  return newPwd("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)
