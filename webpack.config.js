const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const config = {
  devtool: 'cheap-module-eval-source-map',
  context: resolve(__dirname, 'src'),
  entry: {
    app: [
      'react-hot-loader/patch',
      './index.js',
    ]
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      components: resolve(__dirname, 'src/components/'),
      actions: resolve(__dirname, 'src/actions/'),
      helpers: resolve(__dirname, 'src/helpers/'),
      reducers: resolve(__dirname, 'src/reducers/'),
      store: resolve(__dirname, 'src/store/')
    }
  },
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=2',
          'postcss-loader?sourceMap=inline',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ]
      }
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
};

module.exports = config;
