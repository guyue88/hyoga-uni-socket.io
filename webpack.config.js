const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'uni-socket.io.js',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /debug/,
      path.resolve(__dirname, './lib/support/noop.js')
    ),
    new webpack.NormalModuleReplacementPlugin(
      /^engine.io-client$/,
      path.resolve(__dirname, './lib/engine.io-client')
    ),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('lib')],
      },
    ],
  },
  mode: 'production',
}
