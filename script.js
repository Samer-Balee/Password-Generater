// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseLeters = "abcdefghijklmnopqrstuvxyz";

var upperCaseLeters = lowerCaseLeters.toLocaleUpperCase();

var numericCharacters = "0123456789";

var symbolCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


var generatePassword = function() {

  var userNumChoice = window.prompt( "Choose number of charactors between 8 to 128.");
  
  if (isNaN(userNumChoice)) {

   window.alert(" Please enter avalid number ");

   return generatePassword();

  }

  if ( userNumChoice < 8 || userNumChoice > 128) {

    window.alert("Please choose a number between 8 to 128 ");

    return generatePassword();

  }

  
  var allCharacters = "";

  var  includeLowerCase = window.confirm("Click OK, if you would like to include lower Case letters.");

  if (includeLowerCase) {

    allCharacters += lowerCaseLeters;
  }


  var  includeUpperCase = window.confirm("Click OK, if you would like to include upper Case letters.");

  if (includeUpperCase) {

    allCharacters = allCharacters.concat("" , upperCaseLeters);
   
  }

  var  includeNumbers = window.confirm("Click OK, if you would like to include numbers.");

  if (includeNumbers) {

    allCharacters = allCharacters.concat("" , numericCharacters);
   
  }

  var  includeSymbols = window.confirm("Click OK, if you would like to include symbol charaters.");

  if (includeSymbols) {

    allCharacters = allCharacters.concat("" , symbolCharacters);
   
  }
 

  var result = "";

  for (var i = 0 ; i < userNumChoice ; i ++ ) {

    var index = Math.floor(Math.random() * allCharacters.length);

    result += allCharacters[index];
  }
  return result;

 
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
