// Code your solutions in this file
function printBadges(givenArray) {
  for (let i = 0 ; i < givenArray.length; i++){
      console.log(`Welcome ${givenArray[i]}! You are employee #${i+1}.`)
  }
  return givenArray
}

function maybeTrue() {
    return Math.random()>=0.5;
}

function tailsNeverFails() {
  let counter = 0
  while (maybeTrue()){
    counter++;
    console.log(counter)
  }
  return `You got ${counter} tails in a row!`
}
