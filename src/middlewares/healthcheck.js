// src/middlewares/healthcheck.js

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (ctx.path === '/_health') {
      ctx.status = 204; // ✅ Always respond "healthy"
      return;
    }
    await next();
  };
};
