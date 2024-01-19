// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// present with a series of prompts for password criteria
// Function to generate a random password based on user criteria
function generatePassword() {
  // Password criteria
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}";


// prompt for the length of the password
  // Choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = prompt(
    "Please enter at least 8 characters and 128 characters"
  );

  //  input should be validated and at least one character type should be selected
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return ""; // Return an empty string as the password
  }

  // Answer each prompt
  var includeLowercase = confirm("Include lowercase abc...?");
  var includeUppercase = confirm("Include uppercase ABC...?");
  var includeNumeric = confirm("Include numeric 012...?");
  var includeSpecial = confirm("Include special..?");

  // Select which criteria to include in the password
  if (
    !includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial
  ) {
    alert("At least one character type must be selected");
    return ""; // Return an empty string as the password
  }

  var availableChars = "";
  // AsK for character types to include in the password
  availableChars += includeLowercase ? lowercase : "";
  availableChars += includeUppercase ? uppercase : "";
  availableChars += includeNumeric ? numeric : "";
  availableChars += includeSpecial ? special : "";

  // Password is generated that matches the selected criteria
  var generatepassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    generatepassword  += availableChars.charAt(randomIndex);
  }
  return generatepassword ;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
//click the button to generate a password
generateBtn.addEventListener("click", writePassword);
