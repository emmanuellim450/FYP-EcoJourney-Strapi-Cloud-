module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  healthCheck: {
    path: '/_health',
    maxDuration: 60000,
    // 🕐 Add a short startup buffer to prevent premature checks
    onSignal: async () => {
      console.log('Starting Strapi... waiting before marking healthy');
      await new Promise((resolve) => setTimeout(resolve, 5000)); // wait 5 seconds
    },
  },
});
