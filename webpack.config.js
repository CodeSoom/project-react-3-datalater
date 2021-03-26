const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

const apiKey = process.env.API_KEY;

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      templateParameters: {
        mapUrl: `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}`,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
