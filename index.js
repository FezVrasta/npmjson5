const JSON5 = require('json5');
const fs = require('fs');

const package5 = JSON5.parse(fs.readFileSync('./package.json5'));

fs.writeFileSync('./package.json', JSON.stringify(package5, 2, 2));
