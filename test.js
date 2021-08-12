import fs from 'node:fs';
import test from 'ava';
import execa from 'execa';
import tempy from 'tempy';

test('main', async t => {
	const sourceFile = tempy.file();
	const destinationFile = tempy.file();
	fs.writeFileSync(sourceFile, '🦄');
	await execa('./cli.js', [sourceFile, destinationFile]);
	t.is(fs.readFileSync(destinationFile, 'utf8'), '🦄');
});
