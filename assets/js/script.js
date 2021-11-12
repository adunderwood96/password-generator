// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Character Arrays
  var numbersArray = /[0-9]/g;
  var lowerAlphaArray = /[a-z]/g;
  var upperAlphaArray = /[A-Z]/g;
  var specialArray = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '' = '', '+'];

  var newPwd = [];
  var pwdCharacters = [];

  // Generate Password Prompts
  var pwdLength = prompt("How many characters would you like your password to contain?");
  var numbers = confirm("Do you want numbers in your password?");
  var upperAlpha = confirm("Do you want numbers in your password?");
  var lowerAlpha = confirm("you want lowercase letters in your password?")

    // Password Length

    while (condition) {// Assignment code here
      var generateBtn = document.querySelector("#generate");
      
      function generatePassword() {
      
        // Character Arrays
        var numbersArray = /[0-9]/g;
        var lowerAlphaArray = /[a-z]/g;
        var upperAlphaArray = /[A-Z]/g;
        var specialArray = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '' = '', '+'];
      
        var newPwd = [];
        var pwdCharacters = [];
      
        // Generate Password Prompts
        var pwdLength = prompt("How many characters would you like your password to contain?");
        var numbers = confirm("Do you want numbers in your password?");
        var upperAlpha = confirm("Do you want numbers in your password?");
        var lowerAlpha = confirm("you want lowercase letters in your password?")
      
          // Password Length
      
          else (pwdLength < 8 || pwdLength > 128); {
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
        console.log(pwdCharacters)
      
      
        for (var i = 0; i < numCharacter; i++) {
      
          userArray.push(pwdCharacters[Math.floor(Math.random() * pwdCharacters.length)]);
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
      }
      
      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);
      
    } (pwdLength < 8 || pwdLength > 128); {
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
  console.log(pwdCharacters)


  for (var i = 0; i < numCharacter; i++) {

    userArray.push(pwdCharacters[Math.floor(Math.random() * pwdCharacters.length)]);
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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);