const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base number of multiply table",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: "Displays a list with the results in the console",
  })
  .option("t", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Iteration's number in the table",
  })
  .check((argv, options) => {
    if (isNaN(argv.b) || isNaN(argv.t)) {
      throw "Base and Limit should be a number";
    }
    return true;
  }).argv;

module.exports = argv;
