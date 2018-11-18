function printBadges(arr){
  for (y=0; y<arr.length; y++){
    console.log(`Welcome ${arr[y]}! You are employee #${y+1}.`)
  }
  return arr
}

function tailsNeverFails(){
  let y = 0
  while (Math.random() >= 0.5) {
    y+=1
  }
  return `You got ${y} tails in a row!`
}
