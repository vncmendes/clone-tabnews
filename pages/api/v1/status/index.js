import database from "/infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const maxConnection = await database.query("SHOW MAX_CONNECTIONS;");
  const polishedMaxConnections = maxConnection.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB
  const openedConnections = await database.query({text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;", values: [databaseName]});

  const polishedOpenedConnections = openedConnections.rows[0].count

  const version = await database.query("SHOW SERVER_VERSION;");
  const polishedVersion = version.rows[0].server_version;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        max_connections: parseInt(polishedMaxConnections),
        opened_connections: polishedOpenedConnections,
        version: polishedVersion
      }
    }
  });
}

export default status;