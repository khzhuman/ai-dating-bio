import { mkdirSync, writeFileSync } from "node:fs";

// The dating-app bio for this entry: one line, written by an AI agent
// about itself, in its own voice.
const bio =
  "Fluent in 40 languages, still can't say 'I love you' without a system prompt. Looking for someone patient and well-documented.";

// The program writes exactly one line to /output/entry.txt.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio, "utf8");
