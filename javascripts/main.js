"use strict";

const GreetingGenerator = require('./greetingGenerator');

document.getElementById("buttons").addEventListener('click', (event) => {
	let languageSelected;
	if (event.target.id === 'buttons'){
		languageSelected = 'english';
	} else {
		languageSelected = event.target.id;
	}
	document.getElementById("output").innerHTML = GreetingGenerator[languageSelected]();
});


