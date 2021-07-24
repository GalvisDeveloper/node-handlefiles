const fs = require("fs");
const colors = require("colors");

const createFile = (baseNumber, list, until) => {
  return new Promise((res, rej) => {
    if (typeof baseNumber === "number") {
      let outputFile = "";
      let outputConsole = "";
      let fileName = `${baseNumber}-Table.txt`;

      for (let i = 1; i <= until; i++) {
        // Output for file

        outputFile += `\n${baseNumber} x ${i} = ${baseNumber * i}`;

        // Output for console with colors

        outputConsole += `\n${colors.cyan(baseNumber)} ${
          "x".magenta
        } ${colors.cyan(i)} ${"=".magenta} ${colors.cyan(baseNumber * i)}`;
      }
      if (list) {
        console.log(outputConsole);
      }

      // Minuto 55 the boys

      fs.writeFileSync(`./output/${fileName}`, outputFile);

      res(fileName);
    } else {
      rej(`There's not a base number`);
    }
  });
};

module.exports = {
  createFile,
};
