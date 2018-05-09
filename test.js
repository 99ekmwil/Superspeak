var cchoice = 0;

function calculator() {
	var num = Math.floor(Math.random() * 100);
	if (num < 1/3) {
		var cchoice == 1;
	}
	else if (num > 2/3) {
		var cchoice == 3;
	}
	else {
		var cchoice == 2;
	}
	console.log (cchoice);
}
