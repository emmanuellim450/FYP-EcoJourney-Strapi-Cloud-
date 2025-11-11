const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'mysql-fypecojourney.alwaysdata.net'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'fypecojourney_db'),
      user: env('DATABASE_USERNAME', '440126'),
      password: env('DATABASE_PASSWORD', 'V1234!7393'),
      ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false,
    },
    pool: { min: 2, max: 10 },
  },
});
