const withTypescript = require("@zeit/next-typescript");
const path = require("path");

const monorepo = path.join(__dirname, "..");

module.exports = withTypescript({
  webpack(config) {
    config.context = monorepo;
    return config;
  }
});
