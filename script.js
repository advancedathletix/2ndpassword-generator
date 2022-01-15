// Assignment Code
var generateBtn = document.querySelector("#generate");

// get reference to the # generate element
function generatePassword() {
  var min = 8;
  var max = 127;
  var result = ""
  var passwordLength = prompt("How many characters do you want in your password")
  console.log(passwordLength)



// choosing characters for password
  var uppercase = confirm("Would you like to use capital letters in your password?")
  var lowercase = confirm("Would you like to use lowercase letters in your password?")
  var numbers = confirm("Would you like to use numbers in your password?")
  var symbols = confirm("Would you like to use symbols in your password?")

  // arrays of characters to pick from
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbolArray = ["!", "", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", ":", ":", "<", ">", "=", "?", "@", ]
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var chosenArray = []

// if statements 
if(uppercase) {
chosenArray = chosenArray.concat(uppercaseArray);
}
else {
  window.alert("No uppercase letters will be in the password");
}
if(lowercase) {
  chosenArray = chosenArray.concat(lowercaseArray);
}
else {
  window.alert("No lowercase letters will be in the password");
}

if(numbers) {
    chosenArray = chosenArray.concat(numberArray);
    window.alert("number will be used");
}
else {
  window.alert("no numbers");
}

  if(symbols) {
      chosenArray = chosenArray.concat(symbolArray);
}
else {
  window.alert("No lowercase letters will be in the password");
}

// display contetn of chosenArray 
console.log(chosenArray)
        
// for loop for randimization
for (var i = 0; i < passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chosenArray.length)
  var letter = chosenArray[randomNumber]
  result = result + letter 

}

return result;

}



// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);