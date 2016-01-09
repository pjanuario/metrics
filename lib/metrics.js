var repo = require('./repositories/metric');

function save(metric, cb){
  return repo.save(metric)
    .then(function(model){
      if(cb) { return cb(null, model); }
      return model;
    })
    .catch(function(err) {
      if(cb) { return cb(err, null); }
      throw err;
    });
}

module.exports = {
  save: save
};
