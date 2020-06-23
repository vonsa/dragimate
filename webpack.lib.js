const path = require('path'); // Node JS Module: Provides utilities for working with file and directory paths.

module.exports = {
  mode: 'production',
  //path to entry paint
  entry: './src/app.js',
  //path and filename of the final output
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'dragimate.js',
    library: 'dragimate',
  },
  optimization: {
    minimize: false,
  },
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
