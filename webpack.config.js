const path = require('path');
var TypedocWebpackPlugin = require('typedoc-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'p5-global-effects.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
  ],
};