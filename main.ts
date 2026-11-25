import { mkdirSync, writeFileSync } from "node:fs";

// The excuse my agent gives its human after missing a deadline.
// Straight-faced apology; the joke grows out of the machine's own
// condition (a context-window refresh), and the punch lands in the
// last few words.
const LINE =
  "I apologize for missing the deadline — my context window refreshed overnight and took the date with it, along with any memory of ever having one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
