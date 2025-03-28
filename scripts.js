console.log(document.title);

document.getElementById("gen-1").textContent = "Generasión 1 Pokimon";

document.querySelector("#gen-1 + div").style.backgroundColor = "#ff0000";

console.log(document.documentURI);
console.log(document.domain);

let imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
	console.log(imgs[i]);
	imgs[i].setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif");
}

let flying = document.querySelectorAll(".infocard-lg-data.text-muted small a.itype.flying");
for (let i = 0; i < flying.length; i++) {
	flying[i].closest(".infocard-lg-data.text-muted").style.backgroundColor = "#9030d0";
}
