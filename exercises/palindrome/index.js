// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

if (str.length <= 1) return true;
if (str[0] != str.slice(-1)) return false;

return palindrome(str.substr(1, str.length - 2));
};

module.exports = palindrome;
// function palindrome(str) {
//
//   let reversed= "";
//
//   for (let characters of str) {
//     reversed = characters + reversed;
//   }
//
//   if (str === reversed) {
//
//     return true;
//   } else {
//     return false;
//   }
// }
