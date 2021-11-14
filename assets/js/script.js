// Assignment code here

let generateBtn = document.querySelector('#generate');


function generatePassword() {
  let numbersArray = '1234567890';
  let upperAlphaArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerAlphaArray = 'abcdefghijklmnopqrstuvwxyz';
  let specialArray = '~!@#$%^&*()_+{}:?><;.,';
  let password = '';
  let pwdCharacters = '';

  // Password Length Requirements
  let pwdLength = prompt('How many characters would you like your password to contain?');

  // Loop if length does not meet requirements
  if (pwdLength >= 8 && pwdLength <= 128) {
    console.log(pwdLength)
  }

  else {
    alert('Password must be between 8 to 128 characters in length! Click Generate Password to restart.');
    return null;
  }
// add in alert for how many characters password will have (length of pwd)!

  // Character Criteria Prompts
  let numbers = confirm('Click OK if you would like numbers in your password');
  let upperAlpha = confirm('Click OK if you would like uppercase letters in your password');
  let lowerAlpha = confirm('Click OK if you would like lowercase letters in your password');
  let special = confirm('Click OK if you would like special characters in your password');

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

  for (let i = 0; i < pwdLength; i++) {
    password += pwdCharacters[Math.floor(Math.random() * pwdCharacters.length)];
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);