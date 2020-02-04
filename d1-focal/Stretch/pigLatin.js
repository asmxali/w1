
const args = process.argv.slice(2);

const pigLatin = function(word) {

  let firstLetter = word[0];
  let newArray= word.slice(1);
  let newWord= newArray + firstLetter + 'ay';
  return newWord;
  }

  //console.log(args);

  let newString='';
  for( let i = 0; i < args.length; i ++) {
    newString= newString + pigLatin(args[i]) + ' ';
    }

  console.log(newString);
  
