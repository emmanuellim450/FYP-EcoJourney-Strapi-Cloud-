const path = require("path");
const fs = require("fs");

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Serve Adminer when visiting /adminer in browser
    if (ctx.request.url.startsWith("/adminer")) {
      const filePath = path.join(strapi.dirs.app.root, "adminer.php");
      if (fs.existsSync(filePath)) {
        ctx.type = "text/html";
        ctx.body = fs.createReadStream(filePath);
      } else {
        ctx.status = 404;
        ctx.body = "Adminer file not found.";
      }
    } else {
      await next();
    }
  };
};
