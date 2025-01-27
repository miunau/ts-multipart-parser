#!/usr/bin/env node

/* Copyright © 2023 Exact Realty Limited.
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

import esbuild from 'esbuild';
import { copyFileSync, readdirSync } from 'fs';
import path from 'path';

await esbuild.build({
	entryPoints: ['./src/index.ts'],
	outdir: process.env['BUILD_TARGET_DIR'] || 'dist',
	bundle: true,
	minify: true,
	format: 'cjs',
	entryNames: '[name]',
	platform: 'node',
	external: ['esbuild'],
	outExtension: {
		'.js': '.cjs',
	},
});

await esbuild.build({
	entryPoints: ['./src/index.ts'],
	outdir: process.env['BUILD_TARGET_DIR'] || 'dist',
	bundle: true,
	minify: true,
	format: 'esm',
	entryNames: '[name]',
	platform: 'node',
	external: ['esbuild'],
	outExtension: {
		'.js': '.mjs',
	},
});

function copyDeclarationFiles(srcDir) {
	readdirSync(srcDir, { withFileTypes: true }).forEach((dirent) => {
		const fullPath = path.join(srcDir, dirent.name);

		if (dirent.isDirectory()) {
			// Recurse into directories
			copyDeclarationFiles(fullPath);
		} else if (dirent.isFile() && path.extname(fullPath) === '.ts') {
			// Copy .d.ts files to .d.cts
			const newFileName = path.basename(fullPath, '.d.ts') + '.d.cts';
			const newFilePath = path.join(srcDir, newFileName);
			copyFileSync(fullPath, newFilePath);
		}
	});
}

copyDeclarationFiles('./dist');
