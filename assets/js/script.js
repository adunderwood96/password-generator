// Assignment code here

var generateBtn = document.querySelector('#generate');


function generatePassword() {
  var numbersArray = '1234567890';
  var upperAlphaArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerAlphaArray = 'abcdefghijklmnopqrstuvwxyz';
  var specialArray = '~!@#$%^&*()_+{}:?><;.,';
  var password = '';
  var pwdCharacters = '';

  // Password Length Requirements
  var pwdLength = prompt('How many characters would you like your password to contain?');

  // Loop if length does not meet requirements
  if (pwdLength >= 8 && pwdLength <= 128) {
    console.log(pwdLength)
  }

  else {
    alert('Password must be between 8 to 128 characters in length! Click Generate Password to restart.');
    return null;
  }

  alert(`Your password length will be ${pwdLength} characters.`);

  // Character Criteria Prompts
  var numbers = confirm('Click OK if you would like numbers in your password.');
  var upperAlpha = confirm('Click OK if you would like uppercase varters in your password.');
  var lowerAlpha = confirm('Click OK if you would like lowercase varters in your password.');
  var special = confirm('Click OK if you would like special characters in your password.');

  // Password Character Contains Conditions:
  // At least one criteria must be met for pwd characters

  // numbers array characters
  if (numbers) {
    pwdCharacters += numbersArray
  }

  // upperAlpha array characters
  if (upperAlpha) {
    pwdCharacters += upperAlphaArray
  }

  // lower alpha array characters
  if (lowerAlpha) {
    pwdCharacters += lowerAlphaArray
  }

  // special array characters
  if (special) {
    pwdCharacters += specialArray
  }

  // If user does not select at least one, process will restart
  if (
    !numbers && !upperAlpha && !lowerAlpha && !special
  ) {
    return alert('Please select at least one character type for your password criteria! Click Generate Password to restart.');
  }

  for (var i = 0; i < pwdLength; i++) {
    password += pwdCharacters[Math.floor(Math.random() * pwdCharacters.length)];
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);