// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const name = require('./04-names');
const msg = require('./05-utills')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade');

console.log({ name });
console.log(data);

msg(name.john);



