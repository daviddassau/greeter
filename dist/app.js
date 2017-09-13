(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";


const outputFrench = () => {
	return "Quoi de neuf, ho";
};

module.exports = outputFrench;
},{}],2:[function(require,module,exports){
"use strict";


const french = require('./french');
const italian = require('./italian');
const spanish = require('./spanish');


const greetingGenerator = {
	french, italian, spanish
};


module.exports = greetingGenerator;
},{"./french":1,"./italian":3,"./spanish":5}],3:[function(require,module,exports){
"use strict";


const outputItalian = () => {
	return "Cosa sta succedendo, ho";
};

module.exports = outputItalian;
},{}],4:[function(require,module,exports){
"use strict";

const GreetingGenerator = require('./greetingGenerator');



document.getElementById("output").innerHTML = GreetingGenerator.french();
document.getElementById("output").innerHTML = GreetingGenerator.italian();
document.getElementById("output").innerHTML = GreetingGenerator.spanish();

},{"./greetingGenerator":2}],5:[function(require,module,exports){
"use strict";

const outputSpanish = () => {
	return "Que esta pasando, ho";
};

module.exports = outputSpanish;
},{}]},{},[4]);
