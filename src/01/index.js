const path = require('path');
const utils = require('util');

var log = utils.format("nazwa : %s", path.basename(__filename));
console.log(log);