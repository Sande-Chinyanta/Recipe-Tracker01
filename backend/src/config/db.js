import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { ENV } from "./env.js";
import * as schema from "../db/schema.js";



if (!ENV.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined.");
}

const sql = neon(ENV.DATABASE_URL);
export const db = drizzle(sql, { schema });