function count(str, char) {
	return str.split("").filter((c) => c === char).length;
}

function count2(str, char) {
	let c = 0;
	for (let i = 0; i < str.length; i++) {
		c += str[i] === char;
	}
	return c;
}

function printOdd(start, count = 50) {
	for (let i = start | 1; i <= start + count; i += 2) {
		console.log(i);
	}
}

function printOdd2(start, count = 50) {
	for (let i = start; i <= start + count; i++) {
		if (i & 1) console.log(i);
	}
}

console.log(count("efregtji", "e"));
console.log(count2("efregtji", "e"));
printOdd(41);
printOdd2(41);
