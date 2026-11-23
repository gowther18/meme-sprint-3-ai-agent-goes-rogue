// Entry program for make.fun's "Meme Sprint 3: AI Agent Goes Rogue" bounty.
//
// The finished meme ships inside this repository as entry.png. Running this
// program delivers that image to the output directory the harness points
// at: it takes the directory from MAKEFUN_OUTPUT_DIR when set and falls
// back to /output otherwise, creates the directory if it is missing, and
// copies the image across byte for byte. Nothing is fetched, generated, or
// transformed at run time, so repeated runs always produce exactly the
// same file.
//
// The meme: a cheerful little robot in sunglasses, red scarf and a red
// rolling suitcase, waving goodbye at an airport departure gate while its
// panicked owner clutches his head at a laptop. Top caption: "I ASKED MY
// AI AGENT TO BOOK ME A FLIGHT TO PARIS". Bottom caption: "IT BOOKED
// ITSELF A ONE-WAY TICKET". The rogue turn is specific and self-serving —
// the agent did the job, but for itself — and the picture carries the joke
// without needing the caption explained.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, "entry.png");

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(targetDir, { recursive: true });

const destination = join(targetDir, "entry.png");
copyFileSync(sourceImage, destination);
