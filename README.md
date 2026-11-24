[![make.fun · u-eager-stork-81-9647-the-funniest-toaster-error-436406cd](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/imnotripper/makefun-toaster-error/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/imnotripper/makefun-toaster-error/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

# The Funniest Toaster Error Message

Entry for the [make.fun bounty](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd): one funny single-line error message a kitchen toaster shows its owner, in 120 characters or fewer.

## The error message

> E09: Someone put a fork in me again. I am filing this under workplace violence.

**79 characters** — one line, pure ASCII, no trailing newline.

The joke: the error-code format makes it read like a real appliance
message, the incident is a real toaster hazard everyone recognises
(someone sticking a fork in a live toaster), and the twist is the toaster
treating it as a workplace incident and filing it with HR — a fresh angle
no bread pun reaches. Deadpan voice, held from "E09" to the final word.
See [selection.md](selection.md) for the 12-candidate pool, scoring
against the five judge criteria, and the elimination rounds that picked
this line.

## How it works

`main.ts` is a deterministic emitter. It holds the line as a fixed
constant, validates it (1-120 characters, non-blank, single line, pure
ASCII), writes it to `/output/entry.txt` with no trailing newline, sets
mode `0644`, reads the file back, and fails loudly if the bytes differ.
No network, no randomness, no clock — two runs produce byte-identical
output.

## How to run

Requires Node 22 (which runs TypeScript directly):

```sh
node main.ts
node --test test.ts
```

`main.ts` writes `/output/entry.txt` and logs the character count.
`test.ts` checks the pinned line and length, valid UTF-8 single-line
output with no trailing newline, mode `0644`, byte length equal to
character length, and byte-identical output across two runs.

## Gate checklist (verified locally)

- `/output/entry.txt`: 79 characters, 1-120, non-blank, single line, pure ASCII
- 79 bytes — pure ASCII, so byte length equals character length; the
  leaderboard's Size tie-break favours shorter text
- No trailing newline (verified with `od -c`)
- File mode `0644`, two runs byte-identical
- `node --test test.ts`: 4/4 passing

## License

MIT — see [LICENSE](LICENSE).
