



var generateBtn = document.querySelector("#generate");


var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = lower.toUpperCase();
var numbers = '0123456789';
var special = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';


function generatePassword() {
 // var characters = 128;
  var possible = '';
  var password = '';

  //these functions create options for characters to be used for password

  var passwordlength = prompt("Select how many characters, at least 8 up to 128");


  var lowerCase = confirm("Would you like to include lower case letters?");
  if (lowerCase) {
    possible += lower;

  }
  var upperCase = confirm("Would you like to include upper case letters?");
  if (upperCase) {
    possible += upper;
  }
  var number = confirm("Would you like to include numbers?");
  if (number) {
    possible += numbers;

    var specialChar= confirm("Would you like to include special characters?");
    if (specialChar) {
      possible += special; 
    }
    //randomizes the characters chosen
    for (var i = 0; i < passwordlength; i++) {
      var randomIndex = Math.floor(Math.random() * possible.length)
      password += (possible[randomIndex])
    }
  }

  return password;
}



// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);
