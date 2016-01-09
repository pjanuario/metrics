var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    should = chai.should(),
    expect = chai.expect,
    knexCleaner = require('knex-cleaner'),
    bookshelf = require('../lib/repositories/bookshelf'),
    knex = bookshelf.knex,
    target = require('../index'),
    moment = require('moment');

chai.use(chaiAsPromised);

describe('API', function(){
  before(function(done) {
    knex.migrate.latest()
      .then(function(){
        done();
      });
  });

  beforeEach(function(done) {
    var options = {
      mode: 'truncate',
      ignoreTables: ['migrations']
    };
    knexCleaner.clean(knex, options).then(function() {
      done();
    });
  });

  describe('#save', function(){
    var metric;

    beforeEach(function(){
      metric = {
        name: 'metric.com.response.time',
        timestamp: moment('2017-01-09T06:55:17-00:00').format(),
        unit: 'milliseconds',
        value: 500
      };
    });

    describe('with promises', function(){
      it('saves the metric successfully', function(done){
        target.save(metric)
          .should.become(metric)
          .notify(done);
      });

      it('returns an error when something wrong happen', function(done){
        metric.name = null;
        target.save(metric)
          .should.be.rejected
          .notify(done);
      });
    });
    describe('with error first callbacks', function(){
      it('saves the metric successfully', function(done){
        target.save(metric, function(err, model){
          model.should.be.eql(metric);
          done();
        });
      });

      it('returns an error when something wrong happen', function(done){
        metric.name = null;
        target.save(metric, function(err, model){
          expect(model).be.null;
          err.should.exist;
          done();
        });
      });
    });
  });

});
