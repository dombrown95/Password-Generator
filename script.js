// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = (prompt("Enter the length of your password (between 8 and 128 characters"));

  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters");
    return null;
  }

  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");
  
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("At least one character type must be selected.");
    return null;
  }

  var passwordOptions = {
    length: length,
    useLowercase: useLowercase,
    useUppercase: useUppercase,
    useNumeric: useNumeric,
    useSpecial: useSpecial
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];

}

var randomSpecialChar = getRandom(specialCharacters);
var randomNumericChar = getRandom(numericCharacters);
var randomLowercaseChar = getRandom(lowerCasedCharacters);
var randomUppercaseChar = getRandom(upperCasedCharacters);

var passwordOptions = getPasswordOptions ();


// Function to generate password with user input
function generatePassword(options) {
  var allCharacters = [];
  if (options.useSpecial) {
    allCharacters = allCharacters.concat(specialCharacters);
  }
  if (options.useNumeric) {
    allCharacters = allCharacters.concat(numericCharacters);
  }
  if (options.useLowercase) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
  }
  if (options.useUppercase) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
  }

  var password = "";
  for (var i = 0; i < options.length; i++) {
    password += getRandom(allCharacters);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordOptions);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);