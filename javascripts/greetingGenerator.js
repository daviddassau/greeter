"use strict";


const french = require('./french');
const italian = require('./italian');
const spanish = require('./spanish');


const greetingGenerator = {
	french, italian, spanish
};


module.exports = greetingGenerator;