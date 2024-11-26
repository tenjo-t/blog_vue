import { writeFile } from "fs/promises";
import { randomBytes } from "crypto";

const today = new Date()
  .toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
  .replaceAll("/", "-");

const title = process.argv[2];
const filename = process.argv[3] || randomBytes(7).toString("hex");

await writeFile(
  `./articles/${filename}.md`,
  `---
createdAt: "${today}"
updatedAt: "${today}"
title: "${title}"
---`
);
