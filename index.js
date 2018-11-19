// Code your solutions in this file
function printBadges(names) {
  for (var i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
  }
  return names
}

function tailsNeverFails() {
  i = 0;
  while (Math.random() >= 0.5) {
    i++
  }
  //console.log(`You got ${i} tails in a row!`)
  return `You got ${i} tails in a row!`
}
