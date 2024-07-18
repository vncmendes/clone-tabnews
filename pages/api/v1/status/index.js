import database, { databaseInformations } from "/infra/database.js";
async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const dbInfoResponse = await databaseInformations();
  console.log(dbInfoResponse);
  
  response.status(200).json({
    updated_at: updatedAt
  });
}

export default status;