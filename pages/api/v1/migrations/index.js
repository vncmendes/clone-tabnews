// import database from "/infra/database.js";
import migrationRunner from "node-pg-migrate";
import database from "infra/database.js";
import { join } from "node:path";

export default async function migrations(request, response) {
  const dbClient = await database.getNewClient();

  const defaultMigrationRunnerCfg = {
    // databaseUrl: process.env.DATABASE_URL,
    dbClient: dbClient,
    dryRun: request.method === "GET" ? true : false,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations"
  }

  if (request.method === "GET") {
    const pendingMigrations = await migrationRunner(defaultMigrationRunnerCfg);
    await dbClient.end();
    return response.status(200).json(pendingMigrations);
  }

  if (request.method === "POST") {
    const migratedMigrations = await migrationRunner(defaultMigrationRunnerCfg);

    await dbClient.end();
    
    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations)
    }
    return response.status(200).json(migratedMigrations);
  }
  return response.status(405).end();
  //405 - method not allowed

}