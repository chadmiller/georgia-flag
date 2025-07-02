

function flipOn(document, interval) {
	var f = document.getElementById("flipper");
	f.classList.add("flipped");
	setTimeout(flipOff, interval, document, interval);
}

function flipOff(document, interval) {
	var f = document.getElementById("flipper");
	f.classList.remove("flipped");
	setTimeout(flipOn, interval, document, interval);
}

setTimeout(flipOn, 5000, document, 3000);
