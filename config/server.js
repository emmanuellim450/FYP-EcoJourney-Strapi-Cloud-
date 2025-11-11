module.exports = ({ env }) => {
  const rawKeys = env('APP_KEYS');
  const appKeys = Array.isArray(rawKeys)
    ? rawKeys
    : (rawKeys || '').split(',').map(k => k.trim()).filter(Boolean);

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: appKeys,
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
    healthCheck: {
      path: '/_health',
      maxDuration: 90000,
    },
  };
};
