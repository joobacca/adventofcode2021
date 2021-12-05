const fs = require('fs/promises');
const path = require('path');

module.exports = async filePath => {
  let inputFile = filePath ? path.resolve(__dirname, filePath) : `${module.parent.path}\\input.txt`;

  const data = await fs.readFile(inputFile, 'utf8');
  return data;
}
