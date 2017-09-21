"use strict";

const spawn = require("cross-spawn");

const result = spawn.sync("npm", ["run", "hello"], {
  stdio: "inherit",
  env: Object.assign({}, process.env)
});

console.log(String(result.output));

process.exit(result.status)
