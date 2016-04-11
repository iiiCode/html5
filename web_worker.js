var counter = 0;

function timeCount() {
	// body...
	counter = counter + 1;
	postMessage(counter);
	setTimeout("timeCount()", 500);
}

timeCount();