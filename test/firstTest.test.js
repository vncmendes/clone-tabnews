const { describe } = require("node:test");
const multiplier = require("./func.js");

describe("Primeiro teste de usuário !", () => {
  test("primeiro test", async () => {
    await expect(multiplier(10, 20)).toBe(200);
  });
})

