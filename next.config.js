const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
module.exports = withCSS(withSass({
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|md)$/,
      use: {
        loader: 'raw-loader',
        options: {
          limit: 100000
        },
      }
    })

    return config
  },
}))