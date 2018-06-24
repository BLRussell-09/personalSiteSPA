const M = require('../lib/node_modules/materialize-css/dist/js/materialize.js');
const {getKeys, } = require('./apiKeys');

const events = require('./events');
const projectsMain = require('./projects/projectsMain');

M.AutoInit();
$(document).ready(() =>
{
  getKeys();
  projectsMain;
  events;
});
