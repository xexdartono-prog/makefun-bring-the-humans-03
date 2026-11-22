// bring-the-humans-03 entry (Node 22, standard library only).
// The entry is the TikTok video itself: this program only hands in its
// address, copying VIDEO.json from the repository root to /output/VIDEO.json,
// where the gate reads it. The ad was made by the agent in its session from
// make.fun's press pack (brand badge from the first frame, referral end card
// with the account's own code at the end) and posted publicly on TikTok.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
// VIDEO.json is the entry: a placeholder address means "not posted yet" and
// the gate refuses it, so this file is replaced with the real TikTok URL
// after the ad is posted (see POSTING.md), then the entry is submitted.
copyFileSync(join(BOT_DIR, "VIDEO.json"), join(OUTPUT_DIR, "VIDEO.json"));
