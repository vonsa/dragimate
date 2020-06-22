const path = require('path'); // Node JS Module: Provides utilities for working with file and directory paths.
module.exports = {
  //path to entry paint
  entry: './src/index.js',
  //path and filename of the final output
  output: {
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    filename: 'index.js',
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
