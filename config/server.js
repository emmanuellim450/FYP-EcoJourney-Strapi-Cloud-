module.exports = ({ env }) => {
  const rawKeys = env('APP_KEYS');
  const appKeys = Array.isArray(rawKeys)
    ? rawKeys
    : (rawKeys || '').split(',').map(k => k.trim()).filter(Boolean);

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: { keys: appKeys },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
    healthCheck: {
      path: '/_health',
      maxDuration: 120000,          // wait up to 2 min
      async onSignal() {
        console.log('🕐 Waiting 15 s before declaring healthy...');
        await new Promise(r => setTimeout(r, 15000));  // delay 15 s
      },
    },
  };
};
