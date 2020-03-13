// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Z", "Y", "Z"]
var specialsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var password = generatePassword()
var totalpassword = ""
function generatePassword() {
   totalpassword = ""
   password = ""
  var numChar = prompt("How many characters would you like to use?");
  var special = confirm("Click OK to confirm including special characters");
  var upperCase = confirm("Click OK to confirm including uppercases")
  var lowerCase = confirm("Click OK to confirm including lowercases")
  var numbers = confirm("Click OK to confirm including numbers")
  //Start conditionals
  console.log(numChar)
  if (special) {
    password += specialsArray.join("")
    console.log(password)
    }
    if (upperCase){
      password += upperCaseArray.join("")
    }
    if (lowerCase){
      password += lowerCaseArray.join("")
    }
    if (numbers){
      password += numberArray.join("")

    }
    for (var i = 0; i < numChar; i++) {
      totalpassword += password[(Math.floor(Math.random() * password.length))];
  }
  console.log(totalpassword)
  return totalpassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("Password " , password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
