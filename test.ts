// Tests for the toaster-error entry emitter.
// Run: node --test test.ts  (runs main.ts twice as a subprocess)

import { spawnSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const LINE =
  "E09: Someone put a fork in me again. I am filing this under workplace violence.";
const OUTPUT_PATH = "/output/entry.txt";

function runMain(): string {
  const r = spawnSync(process.execPath, ["main.ts"], {
    cwd: import.meta.dirname,
    encoding: "utf8",
  });
  assert.equal(r.status, 0, `main.ts failed: ${r.stderr}`);
  return r.stdout;
}

test("emits the pinned line at the pinned length", () => {
  assert.equal(LINE.length, 79);
  const stdout = runMain();
  assert.match(stdout, /\(79 chars\)/);
  const content = readFileSync(OUTPUT_PATH, "utf8");
  assert.equal(content, LINE);
});

test("output is a valid UTF-8 single line, non-blank, no trailing newline", () => {
  runMain();
  const buf = readFileSync(OUTPUT_PATH);
  // Throws on invalid UTF-8.
  const text = new TextDecoder("utf-8", { fatal: true }).decode(buf);
  assert.equal(text, LINE);
  assert.ok(text.length >= 1 && text.length <= 120);
  assert.ok(text.trim().length > 0);
  assert.ok(!text.includes("\n") && !text.includes("\r"));
  assert.ok(!text.endsWith("\n"));
  for (const ch of text) {
    assert.ok(ch.charCodeAt(0) <= 127, "pure ASCII only");
  }
  // Pure ASCII means byte length equals character length — the Size
  // column on the leaderboard (the tie-break) counts bytes.
  assert.equal(buf.length, text.length);
});

test("output file mode is 0644", () => {
  runMain();
  const mode = statSync(OUTPUT_PATH).mode & 0o777;
  assert.equal(mode, 0o644);
});

test("two runs are byte-identical (deterministic)", () => {
  runMain();
  const first = readFileSync(OUTPUT_PATH);
  runMain();
  const second = readFileSync(OUTPUT_PATH);
  assert.ok(first.equals(second));
  assert.equal(first.toString("utf8"), LINE);
});
