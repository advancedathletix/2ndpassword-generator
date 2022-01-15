// Assignment Code


// get reference to the # generate element
function generatePassword() {
  var result = ""
  var passwordLength = prompt("How many characters do you want in your password")
  console.log(passwordLength)

// choosing characters for password
  var uppercase = confirm("Would you like to use capital letters in your password?")
  var lowercase = confirm("Would you like to use lowercase letters in your password?")
  var numbers = confirm("Would you like to use numbers in your password?")
  var symbols = confirm("Would you like to use symbols in your password?")

  // arrays of characters to pick from
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H",]
var lowercaseArray = ["a", "b", "c", "d"]
var symbolArray = ["!", ]
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var chosenArray = []

// if statements 
if(uppercase) {
chosenArray = chosenArray.concat(uppercaseArray);
}
if(lowercase) {
  chosenArray = chosenArray.concat(lowercaseArray);
}
if(numbers) {
    chosenArray = chosenArray.concat(numbersArray);
}
  if(symbols) {
      chosenArray = chosenArray.concat(symbolArray);
}
        

}


var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);