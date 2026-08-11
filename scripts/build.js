import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { greet } from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

await mkdir(distDir, { recursive: true });
await writeFile(path.join(distDir, 'output.txt'), `${greet('build')}\n`, 'utf8');
console.log('Build complete: dist/output.txt');
