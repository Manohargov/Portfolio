import { mkdir, rm, symlink } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = process.cwd();
const binDirectory = path.join(projectRoot, 'node_modules', '.bin');
const commandPath = path.join(binDirectory, 'tailwindcss');
const cliPath = path.join(
  projectRoot,
  'node_modules',
  '@tailwindcss',
  'cli',
  'dist',
  'index.mjs',
);

await mkdir(binDirectory, { recursive: true });
await rm(commandPath, { force: true });
await symlink(path.relative(binDirectory, cliPath), commandPath);
