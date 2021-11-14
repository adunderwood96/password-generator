// Assignment code here

const generateBtn = document.querySelector('#generate');


function generatePassword() {

  // Character Arrays
  const numbersArray = ['0,1,2,3,4,5,6,7,8,9'];
  const lowerAlphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperAlphaArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const specialArray = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '' = '', '+'];

  const pwdCharacters = '';
  const newPwd = '';

  // Prompts for Password
  const pwdLength = prompt('How many characters would you like your password to contain?');

  // Loop if length does not meet requirements
  if (pwdLength < 8 && pwdLength > 128) {
    alert('Password must be between 8 to 128 characters in length!');
    console.log(pwdLength)
  }

  // const User know how many characters will be in password
  else {
    alert(`You must choose a character length between 8 to 128 characters!`);
    return null;
  }

  // Password Character Contains Conditions:
  if (numbers) {
    const numbers = confirm('Click OK if you would like numbers in your password');
    pwdCharacters += numbersArray

  }

  if (upperAlpha) {
    const upperAlpha = confirm('Click OK if you would like uppercase letters in your password');
    pwdCharacters += upperAlphaArray

  }

  if (lowerAlpha) {
    const lowerAlpha = confirm('Click OK if you would like lowercase letters in your password');
    pwdCharacters += lowerAlphaArray

  }

  if (special) {
    const special = confirm('Click OK if you would like special characters in your password');
    pwdCharacters += specialArray

  }

  if (
    !lowerAlpha && !upperAlpha && !numbers && !special
  ) {
    return alert('Please select at least one character criteria for your password!');
    
  }

  for (const i = 0; i < pwdLength; i++) {
    const pwdCharacters = Math.floor(Math.random() * userChoices.length);
    const character = newPwd[randomNum];
  }

  return newPwd;
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
