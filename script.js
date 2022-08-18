


// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = lower.toUpperCase();
var numbers = '0123456789';
var special = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';



function generatePassword() {
  var characters = 12;
  var possible = '';
  var password = '';

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

    var special = confirm("Would you like to include special characters?");
    if (special) {
      possible += special;
    }
    for (var i = 0; i < passwordlength; i++) {
      var randomIndex = Math.floor(Math.random() * possible.length)
      password += (possible[randomIndex])
    }
  }
  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
