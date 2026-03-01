const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Import plugin
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
  entry: {
    "index-scripts": './src/js/index.js',
    "index-styles": './src/scss/index.scss',
    "baremin-scripts": './src/js/baremin.js',
    "baremin-styles": './src/scss/baremin.scss',
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // Output CSS filename
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Use MiniCssExtractPlugin loader
          'css-loader',   // 2. Turn CSS into JS module
          'sass-loader',  // 1. Compile SCSS to CSS
        ],
      },
    ],
  },
};
