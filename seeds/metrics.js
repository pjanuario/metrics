function Metric(metricName, value, unit, timestamp){
  var ts = new Date();
  return {
    name: metricName,
    value: value,
    unit: unit,
    timestamp: ts
  };
}


exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('metrics').del(),

    // Inserts seed entries
    knex('metrics').insert(Metric('metric.com.response.status_code', 200)),
    knex('metrics').insert(Metric('metric.com.response.status_code', 404)),
    knex('metrics').insert(Metric('metric.com.response.status_code', 500)),
    knex('metrics').insert(Metric('metric.com.response.time', 500, 'milliseconds')),
    knex('metrics').insert(Metric('metric.com.response.time', 500, 'milliseconds')),
    knex('metrics').insert(Metric('metric.com.response.time', 1000, 'milliseconds'))
  );
};
