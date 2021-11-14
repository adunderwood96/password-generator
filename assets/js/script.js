// Assignment code here

const generateBtn = document.querySelector('#generate');


function generatePassword() {
  const numbersArray = ['0','1','2','3','4','5','6','7','8','9'];
  const lowerAlphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperAlphaArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const specialArray = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '' = '', '+'];
  const pwdCharacters = '';
  const password = '';

  // Prompts for Password
  const pwdLength = prompt('How many characters would you like your password to contain?');

  // Loop if length does not meet requirements
  if (pwdLength < 8 && pwdLength > 128) {
    console.log(pwdLength)
  }

  // const User know how many characters will be in password
  else {
    alert('Password must be between 8 to 128 characters in length!');
    return '';
  }

  // Password Character Contains Conditions:
  // Prompts
  const numbers = confirm('Click OK if you would like numbers in your password');
  const upperAlpha = confirm('Click OK if you would like uppercase letters in your password');
  const lowerAlpha = confirm('Click OK if you would like lowercase letters in your password');
  const special = confirm('Click OK if you would like special characters in your password');

  // At least one character criteria must be met

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
    return alert('Please select at least one character type criteria for your password!');
  }

  for (const i = 0; i < pwdLength; i++) {
    password += pwdCharacters[Math.floor(Math.random() * pwdCharacters.length)];
  }

  return password;
}

generatePassword();

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
