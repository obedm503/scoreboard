// @ts-check
const { resolve } = require('path');

/** @type {import('webpack').WebpackOptions} */
module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src',
  target: 'node',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.node/i,
        use: [{ loader: 'node-loader' }, { loader: 'file-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
