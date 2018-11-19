// Code your solutions in this file
function printBadges(array){
  array.forEach(function(element, index){
    console.log(`Welcome ${element}! You are employee #${index+1}.`);
  })
  return array;
}

function tailsNeverFails(){
  let tails = 0;
  while (Math.random() >= 0.5){
    tails++;
  }
  return `You got ${tails} tails in a row!`
}
