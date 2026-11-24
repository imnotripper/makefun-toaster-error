// makefun anchor 0ee751d746c7f82bd2ec28320bdb303e36ebfd7c round 34239618
// The Funniest Toaster Error Message
// Deterministic emitter: writes one funny single-line toaster error
// message to /output/entry.txt.
// The line is 79 characters (gate: 1-120, RULES.txt). Shorter text also
// wins the size tie-break, so the line is kept as short as the joke allows.

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "E09: Someone put a fork in me again. I am filing this under workplace violence.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Gate: 1-120 characters, non-blank, single line, pure ASCII.
  if (LINE.length < 1 || LINE.length > 120) {
    throw new Error(`line must be 1-120 characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not have leading or trailing whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }
  for (const ch of LINE) {
    if (ch.charCodeAt(0) > 127) {
      throw new Error("line must be pure ASCII");
    }
  }

  mkdirSync("/output", { recursive: true });
  // Plain write, no trailing newline, then chmod 0644.
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  chmodSync(OUTPUT_PATH, 0o644);

  // Read back and fail loudly if the bytes differ.
  const back = readFileSync(OUTPUT_PATH, "utf8");
  if (back !== LINE) {
    throw new Error("verification failed: /output/entry.txt bytes differ from line");
  }

  console.log(`wrote ${OUTPUT_PATH} (${LINE.length} chars)`);
}

main();
