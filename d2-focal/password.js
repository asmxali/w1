// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).

const password1 = process.argv[2];
const obfuscate = function(password) {
  let newWord='';
  for( let i = 0; i <= password.length - 1; i++) {
    if (password[i] === 'a') {
      newWord += '4';
    } else if (password[i] === 'e') {
      newWord += '3';
    } else if (password[i] === 'o') {
      newWord += '0';
    } else if (password[i] === 'l') {
      newWord += '1';
    } else {
      newWord += password[i];
    }
  }
  return newWord;
}

console.log(obfuscate(password1));