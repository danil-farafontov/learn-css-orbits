const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader',   // 2. Turn CSS into JS module
          'sass-loader',  // 1. Compile SCSS to CSS
        ],
      },
    ],
  },
};
