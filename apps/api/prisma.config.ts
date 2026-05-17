import "dotenv/config"
import * as path from "path"
import { defineConfig, env } from "prisma/config"

export default defineConfig({
  schema: path.join("src", "db", "schema.prisma"),
  datasource: {
    url: env("DATABASE_URL"),
  },
})