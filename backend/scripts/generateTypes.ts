import { config } from 'dotenv';
config();

import { OGM, generate } from "@neo4j/graphql-ogm";
import * as path from "path"

import typeDefs from "../src/types.graphql";
import driver from "../src/neo4jDriver";

// Generic is applied on the OGM
const ogm = new OGM({ typeDefs, driver });

async function main() {
  const outFile = path.join(__dirname, '../src', "types.ogm.ts");

  await generate({
      ogm,
      outFile,
  });

  console.log("Types Generated");
  process.exit(1);
}
main()