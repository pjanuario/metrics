var database = process.env.DATABASE_NAME;
console.log("Database Name: %s", database);

var knexConfig = {
  client: 'pg',
  connection: {
    database: database
  },
  pool: {
    min: 1,
    max: 2
  },
  migrations: {
    tableName: 'migrations'
  }
};

module.exports = knexConfig;
