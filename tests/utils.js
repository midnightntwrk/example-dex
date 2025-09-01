import fs from "fs";
import crypto from "crypto";
import path from "path";

const contractPath = path.join(
  process.cwd(),
  "contract/oz/FungibleToken.compact"
);
const fileContent = fs.readFileSync(contractPath, "utf8");
const strippedContent = fileContent.replace(/\s/g, "");
const hash = crypto.createHash("sha256").update(strippedContent).digest("hex");
console.log(hash);
