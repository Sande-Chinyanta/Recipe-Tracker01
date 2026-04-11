import { defineConfig } from "drizzle-kit";
import { ENV } from "./src/config/ENV.js";
import "dotenv/config";


export default defineConfig({
  schema: "./src/db/schema.js",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
    ssl: false,
  },
});