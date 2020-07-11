const { resolve } = require('path');
module.exports = {
  context: resolve(__dirname, 'source/js'),
  mode: 'development',
  entry: './app.js',
  output: {
    path: resolve(__dirname, 'build/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: /node_modules/,
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  devtool: 'source-map',
};
