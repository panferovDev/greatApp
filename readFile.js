const fs = require('fs');

const readFileFn = (path) => fs.readFileSync(path, 'utf-8');
// сломал систему
module.exports = readFileFn;
