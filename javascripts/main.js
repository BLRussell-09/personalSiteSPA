const M = require('../lib/node_modules/materialize-css/dist/js/materialize.js');
const {getKeys, } = require('./apiKeys');
const blogsMain = require('./blogs/blogsMain');
const projectsMain = require('./projects/projectsMain');

M.AutoInit();
getKeys();
blogsMain;
projectsMain;
