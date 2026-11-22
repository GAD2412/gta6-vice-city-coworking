import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const sourceDirectory = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(
  join(sourceDirectory, 'POST.json'),
  join(outputDirectory, 'POST.json'),
);
