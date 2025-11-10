const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'caboose.proxy.rlwy.net'),
      port: env.int('DATABASE_PORT', 50921),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'cWgXLDruvgvRGqBhbOvYfQjFOmUTwaAQ'),
      ssl: { rejectUnauthorized: false }, // <-- always allow self-signed
    },
    pool: { min: 2, max: 10 },
    acquireConnectionTimeout: 60000,
  },
});
