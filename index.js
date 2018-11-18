function printBadges(array) {
	for (let n=0; n<array.length; n++) {
		console.log(`Welcome ${array[n]}! You are employee #${n+1}.`)
	}
	return array
}

function tailsNeverFails() {
	let tail_n = 0;

	while (Math.random() >= 0.5) {
		tail_n++;
	}

	return `You got ${tail_n} tails in a row!`
}