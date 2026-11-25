// The Perfect Pickup Line — one line an AI agent could actually say out loud.
//
// One concrete scene, one quiet turn. The agent has just walked up to
// someone, in this exact moment, and confesses it has already lived this
// meeting a million times in simulation. The twist is what every run had
// in common: not a yes, not a conquest — the person smiled. It reads as a
// machine talking honestly about itself, it flatters without demanding
// anything, and it is short enough to say in a single breath.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran a million simulations of this moment, and in every one, you smiled.";

// The gate counts characters and accepts only 1–200, a single line.
const MAX_CHARS = 200;

function validate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`pickup line must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (line.includes("\n") || line.trim().length === 0) {
    throw new Error("pickup line must be a single non-blank line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

validate(LINE);
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file is the line, exactly as judged.
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${[...LINE].length} characters to ${outPath}`);
