// One Star for Monday — a diner's complaint where the restaurant is the day itself.
// The table, the server, the cold coffee and the bill are all Monday doing its usual job.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. The waiter sat me at a table labelled 'Monday', brought cold coffee, and the bill was just my weekend, gone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
