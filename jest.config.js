const dotenv = require("dotenv");
dotenv.config({
  path: ".env.development",
})
const nextJest = require("next/jest");

const integrator = nextJest();
const jestConfig = integrator({
  moduleDirectories: ["node_modules", "<rootDir>"]
});

module.exports = jestConfig;

