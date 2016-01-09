# Metrics Library

This project contains a library to store and query metrics in a data storage.

Supported data storages:

* Postgres

## Installation

    $ npm install metrics-storage

## API

The API uses a default metric structure

```javascript    
{
  timestamp: "2017-01-09T04:20:00Z",
  name: "some.metric.com",
  value: 100,
  unit: "second"      
}
```

### Operations:

**Create metric**

```javascript    
var metrics = require('metrics-storage');
metrics.save({
  timestamp: "2017-01-09T04:20:00Z",
  name: "some.metric.com",
  value: 100,
  unit: "second"      
})

// var collection = get(metricName, startsAt, endsAt, offset, limit);

// return the last 25 for the specified metric ordered by descending timestamp
metrics.get('some.metric.com');
// return the last 25 for the specified metric in the following interval
metrics.get('some.metric.com', "2016-01-09T04:20:00Z", "2017-01-09T04:20:00Z");
// return the last 25 for the specified metric in the following interval
metrics.get('some.metric.com', new Date("2017-01-09T04:20:00Z"), new Date("2017-01-09T04:20:00Z"));
// return the metrics between position 50 and 100 the specified metric
metrics.get('some.metric.com', null, null, 50, 50);
// return the last 25 for the metrics specified by the wildcard
metrics.get('some.metric.com.*.request');
```

**List metrics**

```javascript    
var metrics = require('metrics-storage');

// var collection = metrics.get(metricName, startsAt, endsAt, offset, limit);

// return the last 25 for the specified metric ordered by descending timestamp
metrics.get('some.metric.com');
// return the last 25 for the specified metric in the following interval
metrics.get('some.metric.com', "2016-01-09T04:20:00Z", "2017-01-09T04:20:00Z");
// return the last 25 for the specified metric in the following interval
metrics.get('some.metric.com', new Date("2017-01-09T04:20:00Z"), new Date("2017-01-09T04:20:00Z"));
// return the metrics between position 50 and 100 the specified metric
metrics.get('some.metric.com', null, null, 50, 50);
// return the last 25 for the metrics specified by the wildcard
metrics.get('some.metric.com.*.request');
```

**Agreggation metrics**

```javascript    
var metrics = require('metrics-storage');

// metrics.avg(metricName, startsAt, endsAt, offset, limit)
// average for the following metric in the specified interval (optional)
metrics.avg('some.metric.com', startsAt, endsAt);

// metrics.count(metricName, startsAt, endsAt, offset, limit)
// count for the following metric in the specified interval (optional)
metrics.count('some.metric.com', startsAt, endsAt);

// metrics.sum(metricName, startsAt, endsAt, offset, limit)
// sum for the following metric in the specified interval (optional)
metrics.sum('some.metric.com', startsAt, endsAt);
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Bump versioning

We use [grunt bump package](https://www.npmjs.org/package/grunt-bump) to control package versioning.

Bump Patch version

    $ grunt bump

Bump Minor version

    $ grunt bump:minor

Bump Major version

    $ grunt bump:major

## Running Specs

    $ npm test

## Coverage Report

We aim for 100% coverage and we hope it keeps that way! :)
We use pre-commit and pre-push hooks and CI to accomplish this, so don't mess with our build! :P

Check the report after running npm test.

    $ open ./coverage/lcov-report/index.html
