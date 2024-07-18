describe("Teste de conexão com o servidor WEB", () => {
  test("GET to /api/v1/status should return 200 Status Code", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.updated_at).toBeDefined();

    const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
    expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  })
})