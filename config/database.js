const path = require('path');

module.exports = ({ env }) => {
  return {
    connection: {
      client: 'mysql', // use MySQL
      connection: {
        host: env('DATABASE_HOST', 'caboose.proxy.rlwy.net'),   // Railway public host
        port: env.int('DATABASE_PORT', 50921),                  // Railway public port
        database: env('DATABASE_NAME', 'railway'),             // Railway database name
        user: env('DATABASE_USERNAME', 'root'),                // Railway username
        password: env('DATABASE_PASSWORD', 'cWgXLDruvgvRGqBhbOvYfQjFOmUTwaAQ'), // Railway password
        ssl: env.bool('DATABASE_SSL', true),                   // Railway requires SSL for public connections
      },
      pool: { min: 2, max: 10 },
      acquireConnectionTimeout: 60000,
    },
  };
};
