
function printBadges(name){
  for (let i=0; i<name.length; i++){
    console.log(`Welcome ${name[i]}! You are employee #${i+1}.`)
}
  return name;
}

function tailsNeverFails(){
  let i=0;
  while (Math.random() >=0.5){
    i++;
  }
  console.log(`You got ${i} tails in a row!`);
}
