// PRACTICA 1

function splitString(str) {
	return str.toUpperCase().split("").join(" ");
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

console.log(splitString("ertrghjfioentoe"));
console.log(countWords("Carlos Moya García"));
console.log(countWords2("Carlos Moya García"));
console.log(splitString(""));
console.log(countWords(""));
console.log(countWords2(""));
