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
    maxDuration: 90000,
    onSignal: async () => {
      console.log('Waiting 8 seconds before reporting healthy...');
      await new Promise(resolve => setTimeout(resolve, 8000));
},

  },
});
