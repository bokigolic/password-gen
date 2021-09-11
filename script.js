// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(len) {
  var charsStr = "abcdifgjklmnopqwxzyABSDIFGJKLMNOPQXUYZ123456789!@#$%^&*"
  var charsList = []
  for (i = 0; i < charsStr.length-1; i++){
    charsList.push(charsStr[i])
  }

  var randomPassStr = ""
  for (var i = 0; i < len-1; i++){
    randomPassStr += charsList[Math.floor(Math.random()*charsList.length)]
  }
  
  return randomPassStr;
  }
  

// Write password to the #password input
function writePassword() {
  var passwordNum = window.prompt("How many caracter you want?");

  var password = generatePassword(passwordNum.length);
  // var passwordText = document.querySelector("#password");
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var textField = document.getElementById("password")