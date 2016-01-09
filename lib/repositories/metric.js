var bookshelf = require('./bookshelf'),
    Model = require('../metric');

var Metric = bookshelf.Model.extend({
  tableName: 'metrics'
});

function save(model, cb) {
  return Metric.forge(model).save()
    .then(function(model){
      return new Model(model.toJSON());
    });
}

module.exports = {
  save: save
}
