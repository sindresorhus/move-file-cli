#!/usr/bin/env node
'use strict';
const meow = require('meow');
const moveFile = require('move-file');

const cli = meow(`
	Usage
	  $ move-file <source-path> <destination-path>

	Options
	  --no-overwrite  Don't overwrite an existing destination file

	Example
	  $ move-file source/unicorn.png destination/unicorn.png
`, {
	flags: {
		overwrite: {
			type: 'boolean',
			default: true
		}
	}
});

const [source, destination] = cli.input;

(async () => {
	await moveFile(source, destination, cli.flags);
})();
