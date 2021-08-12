#!/usr/bin/env node
import meow from 'meow';
import {moveFileSync} from 'move-file';

const cli = meow(`
	Usage
	  $ move-file <source-path> <destination-path>

	Options
	  --no-overwrite  Don't overwrite an existing destination file

	Example
	  $ move-file source/unicorn.png destination/unicorn.png
`, {
	importMeta: import.meta,
	flags: {
		overwrite: {
			type: 'boolean',
			default: true,
		},
	},
});

const [source, destination] = cli.input;

moveFileSync(source, destination, cli.flags);
