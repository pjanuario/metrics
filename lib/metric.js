var _ = require('lodash');

var Metric = function(attrs){
  var fields = ['name', 'timestamp', 'unit', 'value'];
  return _.merge(this, _.pick(attrs, fields));
};

module.exports = Metric;
