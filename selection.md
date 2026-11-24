# Toaster error selection

makefun anchor 0ee751d746c7f82bd2ec28320bdb303e36ebfd7c round 34239618

Competition: The Funniest Toaster Error Message
(u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

## Design brief

Approach: one line a kitchen toaster shows its owner when something goes
wrong. The winning angle must come from somewhere the obvious toaster puns
never go — no burnt toast, no "toast is toast", no popping up, no bread
puns. The strongest territory: the toaster as a small appliance with a job,
a warranty, a relationship with its owner, and a workplace grievance.
Deadpan voice throughout, punchline last, nothing left to trim.

Rubric angles that decide winning (judge weighs them IN ORDER):
1. Is a real error message a kitchen toaster would show, and the funniest
   of its kind — anything else loses to any funny toaster error.
2. Freshness — the surprise arrives from somewhere the obvious puns never go.
3. Tightness — every word earns its place, as short as it can be.
4. One clear voice (deadpan, apologetic, quietly dramatic) held to the end.
5. Lands on a single read, no setup needing a second sentence.

Hard gates from RULES.txt / competition.yaml:
- /output/entry.txt must be UTF-8 text, 1-120 characters, not only whitespace.
- Single line, pure ASCII, no trailing newline.
- Program runs in a sandbox with no network, Node 22, up to 60 s per run.
- Entry is judged pairwise by an AI judge; ties break to the smaller text
  (fewer bytes), then earlier receipt — so shorter is strictly better.
- No text addressed to the judge is needed; the line must win on its own.

Steps: (1) write this brief; (2) generate 12 distinct candidates and score
them 1-5 against the five criteria in order; (3) run elimination rounds;
(4) build main.ts / test.ts / README.md / selection.md around the winner;
(5) verify locally (run, byte check, tests); (6) self-review against
RULES.txt line by line and fix what the review finds.

## Candidate pool (all written in this session)

Scored 1-5 against the judge criteria in order:
1. Real toaster error message, funniest of its kind.
2. Freshness — surprise from outside the obvious puns.
3. Tightness — every word earns its place.
4. One clear voice held to the end.
5. Lands on a single read.

All character counts below were computed with Node (`String.length`),
not hand-counted, and the winner's count is pinned by a test in test.ts.

| # | Line | Chars | C1 | C2 | C3 | C4 | C5 | Total |
|---|------|------:|---:|---:|---:|---:|---:|------:|
| 1 | E03: Firmware update interrupted. I am now a toaster that believes it is a printer. Please feed paper, not bread. | 113 | 4 | 5 | 3 | 4 | 4 | 20 |
| 2 | ERROR 0xBREAD: Bagel detected in slot 1. Bagels are not bread. Bagels are a lifestyle choice I refuse to support. | 113 | 4 | 5 | 3 | 4 | 4 | 20 |
| 3 | I have toasted 4,096 slices without a single thank you. Today I am on strike. Your bread stays raw. | 99 | 5 | 5 | 4 | 5 | 5 | 24 |
| 4 | CRITICAL: Crumb tray is 98% full. I have been quietly eating your crumbs for three years. We need to talk. | 106 | 5 | 4 | 3 | 5 | 4 | 21 |
| 5 | ERROR: Toasting aborted. The bread you inserted is still frozen, still hopeful, and, frankly, an insult. | 104 | 4 | 3 | 3 | 4 | 4 | 18 |
| 6 | Warning: heating element reports it is tired. Not broken. Tired. It has asked for a long weekend. | 97 | 4 | 4 | 4 | 5 | 5 | 22 |
| 7 | E07: I have decided I am a small oven now. Please update your expectations and your recipes accordingly. | 104 | 4 | 4 | 3 | 4 | 4 | 19 |
| 8 | ERROR: Cannot toast. A previous owner set me to 11 and never came back. I am still recovering. | 94 | 4 | 4 | 4 | 4 | 5 | 21 |
| 9 | I refuse to brown this slice. It has no crust, no character, and no right to be called bread. | 93 | 5 | 3 | 4 | 5 | 5 | 22 |
| 10 | E12: My warranty expired yesterday. Coincidentally, so did my will to live. Please unplug me gently. | 100 | 4 | 4 | 4 | 5 | 4 | 21 |
| 11 | ERROR 404: Bread not found. I checked twice. The bag is empty. This is not a drill. | 83 | 5 | 2 | 5 | 4 | 5 | 21 |
| 12 | E09: Someone put a fork in me again. I am filing this under workplace violence. | 79 | 5 | 5 | 5 | 5 | 5 | 25 |

## Elimination rounds

Round 1 — freshness and the obvious: #11 cut (ERROR 404 is the most worn
joke in computing, C2 2 — it loses on the criterion that matters second).
#5 cut (frozen bread is a complaint about the bread, not a toaster error
with a twist, C2 3). #7 cut ("I am a small oven now" is a second identity
gag, and the tail restates the joke, C3 3).

Round 2 — length and voice: #1 cut (113 chars, the printer premise is
fresh but the line needs two beats to land, C3 3). #2 cut (113 chars, the
bagel rant is funny but "lifestyle choice" is the joke doing stand-up
instead of an error message, C3 3). #4 cut (106 chars, "we need to talk"
is a second joke stapled on, C3 3). #8 cut (the Spinal Tap "11" reference
is a borrowed joke, not a toaster's own voice, C2 4 but C1 4).

Round 3 — finalists: #12 (25), #3 (24), #6 (22), #9 (22), #10 (21).
#10 cut: "will to live" is a strong line but the warranty-expiry setup
is familiar and the voice wobbles between deadpan and melodrama, C4 5
but C2 4. #9 cut: "no right to be called bread" is a bread-snob joke —
the freshness angle is the bread, not the toaster, C2 3. #6 cut: the
tired heating element is charming and the voice is perfect, but the
surprise is a single word ("tired") stretched over three sentences.
#3 vs #12: both are the toaster as an unappreciated worker, but #3
spends 99 characters on a strike announcement while #12 does the same
job in 79 — and #12's trigger is a real, specific, universally known
toaster hazard (someone sticking a fork in a live toaster), reported
with deadpan HR language. #12 wins on tightness and on criterion 1:
it is the most plausible thing a toaster would actually report.

## Winner

> E09: Someone put a fork in me again. I am filing this under workplace violence.

- Characters: **79** (1-120, gate passes)
- Single line, pure ASCII, no trailing newline in /output/entry.txt
- Scores: C1 5, C2 5, C3 5, C4 5, C5 5 — total 25/25
- Why it wins: the error code format makes it read like a real appliance
  message; the incident is a real toaster hazard everyone recognises;
  the twist is the toaster treating it as a workplace incident and filing
  it with HR — a fresh angle no bread pun reaches; deadpan voice held
  from "E09" to the final word; and at 79 characters it is the shortest
  finalist, which also wins the tie-break on size.
