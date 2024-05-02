const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // Make sure webpack is required
require('dotenv').config(); // Load environment variables from .env file into process.env

module.exports = {
  entry: './frontend/src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './favicon.ico'
    }),
    // DefinePlugin to expose environment variables to your application
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce((env, key) => {
        if (key.startsWith('REACT_APP_')) { // Ensuring only variables starting with REACT_APP_ are included
          env[key] = JSON.stringify(process.env[key]);
        }
        return env;
      }, {}),
      'process.env.PUBLIC_URL': JSON.stringify('/') // Assuming you want to define this as well
    })
  ],
  devServer: {
    historyApiFallback: true,
    static: './build',
    hot: false,
  }
};
