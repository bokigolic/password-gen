// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["+", "-", "*", "/", "&", ",", ".", "!", "$", "@", "?"];
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmSpecialCharacters;
var confirmNumber;
var confirmLowerCase;
var confirmUpperCase;


function generatePassword() {
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    
    while(confirmLength <= 7 || confirmLength >= 129) {
        alert("Password length must be between 8 - 128 characters. Please try again!");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
        }
        alert("Your password will have " + confirmLength + " characters");

    var confirmSpecialCharacters = confirm("Click OK if you'd like to include Special Characters");
    var confirmNumber = confirm("Click OK if you'd like to include Numbers");
    var confirmLowerCase = confirm("Click OK if you'd like to include LowerCase Characters");
    var confirmUpperCase = confirm("Click OK if you'd like to include UpperCase Characters");

        while(confirmUpperCase === false && confirmLowerCase === false && confirmNumber ===false && confirmSpecialCharacters === false) {
            alert("You must choose at least one parametar!");
            var confirmSpecialCharacters = confirm("Click OK to confirm if you would like to include Special Characters");
            var confirmNumber = confirm("Click OK to confirm if you would like to include Numbers");    
            var confirmLowerCase = confirm("Click OK to confirm if you would like to include LowerCase Characters");
            var confirmUpperCase = confirm("Click OK to confirm if you would like to include UpperCase Characters");  
    }
    var passwordCharacters = []

    if (confirmSpecialCharacters) {
        passwordCharacters = passwordCharacters.concat(specialChar)
    }
    if (confirmNumber) {
        passwordCharacters = passwordCharacters.concat(number)
    }
        
    if (confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(lowerLetter)
    }
  
    if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(upperLetter)
    }
  
        console.log(passwordCharacters)

        var randomPassword = ""

        for (var i = 0; i < confirmLength; i++) {
            randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
            console.log(randomPassword)
        }
        return randomPassword;

}

 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);