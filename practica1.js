function splitString(str) {
	return str.toUpperCase().split("").join(" ");
}

function splitString2(str) {
	if (str.length == 0) return "";
	let s = str[0].toUpperCase();
	for (let i = 1; i < str.length; i++) {
		s += " " + str[i].toUpperCase();
	}
	return s;
}

function countWords(str) {
	return str.length == 0 ? 0 : str.split(" ").length;
}

function countWords2(str) {
	let count = str.length == 0 ? 0 : 1;
	for (let i = 0; i < str.length; i++) {
		count += str[i] == " ";
	}
	return count;
}

// functiona con multiples espacios
function countWords3(str) {
	let count = 0;
	let space = true;
	for (let i = 0; i < str.length; i++) {
		count += space && str[i] !== " ";
		space = str[i] === " ";
	}
	return count;
}

console.log(splitString("ertrghjfioentoe"));
console.log(splitString2("ertrghjfioentoe"));
console.log(countWords("Carlos Moya García"));
console.log(countWords2("Carlos Moya García"));
console.log(countWords3("  Carlos Moya García   "));
console.log(splitString(""));
console.log(splitString2(""));
console.log(countWords(""));
console.log(countWords2(""));
