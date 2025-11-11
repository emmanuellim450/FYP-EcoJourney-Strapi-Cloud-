module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // ✅ Add this block to help Strapi Cloud pass readiness probe
  healthCheck: {
    path: '/_health',      // Strapi Cloud checks this route
    maxDuration: 60000,    // Allow up to 60 seconds for startup
  },
});
