// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
// var resultPassword = [];

var generatePassword = function() {

  var userChoice = window.prompt( "choose number of charactors");

  if (isNaN(userChoice)) {

   window.alert(" Please choose avalid number ")

   return generatePassword();

  }
  var result = "";

  for (var i = 0 ; i < userChoice ; i ++ ) {
    var index = Math.floor(Math.random() * characters.length);
    result += characters[index]
  }
  return result;

  // var numPassword = Math.floor(Math.random() * userChoice);

  // var passwor

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
