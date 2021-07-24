const { createFile } = require("./helpers/multiply");
const argv = require("./config/yargs");
require("colors");

console.clear();

createFile(argv.b, argv.l, argv.t)
  .then((nameFile) => console.log(nameFile.red, " Created".green))
  .catch((err) => console.log(err.red));

// console.log(argv);

// const baseNumber = "true";

// console.log(process.argv);
// const [, , arg3] = process.argv;
// const [, baseNumber = 5] = arg3.split("=");

// console.log(typeof baseNumber);
// console.log(typeof parseInt(baseNumber));
