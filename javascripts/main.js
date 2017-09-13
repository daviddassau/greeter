"use strict";

const GreetingGenerator = require('./greetingGenerator');



document.getElementById("output").innerHTML = GreetingGenerator.french();
document.getElementById("output").innerHTML = GreetingGenerator.italian();
document.getElementById("output").innerHTML = GreetingGenerator.spanish();
