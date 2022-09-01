const fs = require('fs');

const readFileFn = (path) => fs.readFileSync(path, 'utf-8');
// nu privet
module.exports = readFileFn;
