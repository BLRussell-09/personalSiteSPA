const M = require('../lib/node_modules/materialize-css/dist/js/materialize.js');
const blogsMain = require('./blogs/blogsMain');
const {getKeys, } = require('./apiKeys');

console.log('hey');
M.AutoInit();
getKeys();
blogsMain;
