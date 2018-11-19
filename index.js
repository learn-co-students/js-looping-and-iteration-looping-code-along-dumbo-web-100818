// Code your solutions in this file
// const names = ['Ada', 'Brenden', 'Ali']
//
function printBadges(names){
  for (let i = 0; i < names.length; i++){
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names
}

function coinflip(){
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
function tailsNeverFails(){
  var i = 0
  while (coinflip() == 'tails') {
    i++
  }
  return `You got ${i} tails in a row!`
}
// function tailsNeverFails(){
//   while
//
//
// }
