
const args = process.argv.slice(2);

const reverseString = function(word) {

  let newString='';
  for (i = word.length-1; i >= 0; i--) {
    newString= newString + word[i];
    }
  return newString;
  }

  console.log(args);

  
  for( let i = 0; i < args.length; i ++) {
    console.log(reverseString(args[i]));
  }
  
