// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseLeters = "abcdefghijklmnopqrstuvxyz";  // lower case string

var upperCaseLeters = lowerCaseLeters.toLocaleUpperCase(); //upper case string

var numericCharacters = "0123456789"; // numeric charactors

var symbolCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; // symbole charactors


// main function
var generatePassword = function() {

  var userNumChoice = window.prompt( "Choose number of charactors between 8 to 128."); // using prompt to ask user for number of charactors
  
  if (isNaN(userNumChoice)) {  // checking if it's a valid number

    window.alert(" Please enter avalid number "); // alert function

    return generatePassword(); // if the number is not valid return up to the function

  }

  if ( userNumChoice < 8 || userNumChoice > 128) {  //checking if the number is between 8 to 128

    window.alert("Please choose a number between 8 to 128 "); // if not return up to function

    return generatePassword();

  }

  
  var allCharacters = ""; // making empty string to full after user choices

  var  includeLowerCase = window.confirm("Click OK, if you would like to include lower Case letters."); // confirmation to add lower case characters

  if (includeLowerCase) { // if it's true

    allCharacters += lowerCaseLeters; // add lower case string to all characters string using +=
  }


  var  includeUpperCase = window.confirm("Click OK, if you would like to include upper Case letters."); // confirmation to add upper case characters

  if (includeUpperCase) {  // if it's true

    allCharacters = allCharacters.concat("" , upperCaseLeters); // add upper case string to all characters string using .concat
   
  }

  var  includeNumbers = window.confirm("Click OK, if you would like to include numbers."); // confirmation to add numeric characters

  if (includeNumbers) { // if it's true

    allCharacters = allCharacters.concat("" , numericCharacters); // add numeric string to all characters string using .concat
   
  }

  var  includeSymbols = window.confirm("Click OK, if you would like to include symbol charaters."); // confirmation to add symbol characters

  if (includeSymbols) { // if it's true

    allCharacters = allCharacters.concat("" , symbolCharacters);  // add symbols string to all characters string using .concat
   
  }
 

  var result = ""; // empty string for generate password

 // condition to guarantee including at least one charactor of each string 
  if (
    (userNumChoice >= 8 && userNumChoice <= 15) && // if the user confirmed all choices
    (includeLowerCase === true) &&
    (includeUpperCase === true) &&
    (includeNumbers === true) &&
    (includeSymbols === true ) 
) {
 // loop to pick one charactor of each string
  for (var i = 0 ; i < 1 ; i ++ ) {
  var lowerIndex = Math.floor(Math.random() * lowerCaseLeters.length);
  var upperIndex = Math.floor(Math.random() * upperCaseLeters.length);
  var numericIndex = Math.floor(Math.random() * numericCharacters.length);
  var symboleIndex = Math.floor(Math.random() * symbolCharacters.length);
  }
  // adding random charactors to result
  result += lowerCaseLeters[lowerIndex]
  result += upperCaseLeters[upperIndex]
  result += numericCharacters[numericIndex]
  result += symbolCharacters[symboleIndex]
 
  // loop to complete remaining password charactors
  for (var i = 0 ; i < (userNumChoice - 4) ; i ++ ) { 
    var index = Math.floor(Math.random() * allCharacters.length );
    result += allCharacters[index]
  }
  
} else {
 // if one of the user choices is not true
 // use this loop to create random characters
    for (var i = 0 ; i < (userNumChoice) ; i ++ ) {
    var index = Math.floor(Math.random() * allCharacters.length );
    result += allCharacters[index]
  }
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
