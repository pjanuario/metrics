var knexfile = require('../../knexfile');
var knex = require('knex')(knexfile);
module.exports = require('bookshelf')(knex);;
