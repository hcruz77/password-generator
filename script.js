// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordlength = Number(prompt("How long would you like for your password? (Between 8-128)"));
  var lowerCase = prompt("Would you like lower case letters in your password?");
  var upperCase = prompt("Would you like upper case letters in your password?");
  var number = Number(prompt("Would you like numbers in your password?"));
  var specialChar = prompt("Would you like special characters in your password?");

}
if(){
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
