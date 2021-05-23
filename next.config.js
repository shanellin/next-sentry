const privateKey = require("./private_key")
const withSourceMaps = require("@zeit/next-source-maps")
const SentryCliPlugin = require("@sentry/webpack-plugin")
const webpack = require("webpack")

const versionId = "1.0.1"

module.exports = withSourceMaps({
  env: {
    key_dsn: privateKey.key_dsn,
    version: versionId,
    APP_ENV: process.env.APP_ENV
  },
  webpack: (config, { isServer, buildId }) => {
    console.log(buildId)
    // if (!isServer) {
    //   config.resolve.alias["@sentry/node"] = "@sentry/browser"
    // }
    // if (process.env.APP_ENV == "production") {
    //   config.plugins.push(
    //     ...[
    //       new webpack.DefinePlugin({
    //         "process.env.CONFIG_BUILD_ID": JSON.stringify(buildId)
    //       }),
    //       new SentryCliPlugin({
    //         include: [".next"],
    //         ignore: ["node_modules", "next.config.js"],
    //         configFile: ".sentryclirc",
    //         release: buildId,
    //         urlPrefix: "~/_next"
    //       })
    //     ]
    //   )
    // }
    return config
  }
})