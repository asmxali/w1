const rollDice = function (numberOfRolls) {
  let rolls ='';
  for (let i=0; i < numberOfRolls; i++) {
    roll = Math.floor(Math.random() * Math.floor(5));
    if (i === numberOfRolls-1) {
      rolls += roll;
    } else {
      rolls += roll + ', ';
    }
  }
  return rolls;
}

let arg = process.argv.slice(2);
for (let element of arg) {
  console.log(rollDice(element));
}

