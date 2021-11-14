// Assignment code here
var generateBtn = document.querySelector("#generate");

// Character Arrays
var numbersArray = ['0,1,2,3,4,5,6,7,8,9'];
var lowerAlphaArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperAlphaArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialArray = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '' = '', '+'];

var pwdCharacters = "";

// Prompts for Password
function generatePassword() {
  // Loop if length does not meet requirements
  var pwdLength = window.prompt("How many characters would you like your password to contain?");

  while (pwdLength < 8 || pwdLength > 128) {
    window.alert("Password must be between 8 to 128 characters in length!");
    return generatePassword();
  }

  // Let User know how many characters will be in password
  if (isNan(pwdLength)) {
    window.alert(`You must choose a character length between 8 to 128 characters!`);
    return null;
  }

  // Password Character Contains Conditions:
  if (numbers) {
    var numbers = window.confirm("Click OK if you would like numbers in your password");
    pwdCharacters = pwdCharacters.concat(numbersArray);

  }

  if (upperAlpha) {
    var upperAlpha = window.confirm("Click OK if you would like uppercase letters in your password");
    pwdCharacters = pwdCharacters.concat(upperAlphaArray);

  }

  if (lowerAlpha) {
    var lowerAlpha = window.confirm("Click OK if you would like lowercase letters in your password");
    pwdCharacters = pwdCharacters.concat(lowerAlphaArray);

  }

  if (special) {
    var special = window.confirm("Click OK if you would like special characters, such as '!@#$^&*-_=+' in your password");
    pwdCharacters = pwdCharacters.concat(specialArray);

  }
  // console.log("pwdCharacters worked")

  var newPwd = "";

  for (var i = 0; i < confirmLength; i++) {
    var pwdCharacters = Math.floor(Math.random() * userChoices.length);
    var character = newPwd[randomNum];
    console.log(character);
    char.push(character);
  }

  return newPwd("");
}

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)
