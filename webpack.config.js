const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: 'main.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'build/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: "css-loader", options: {minimize: true}},
            {loader: "sass-loader"},
          ]
        }),
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [{loader: "babel-loader"}]
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'WEBPACK': JSON.stringify(process.env.WEBPACK || ''),
      }
    }),

    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.AggressiveMergingPlugin(),

    // remove useless locales that moment automatically bundles
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ExtractTextPlugin('build/[name].css'),
  ],
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
    ignored: /node_modules/,
  },
  devServer: {
    contentBase: [path.join(__dirname, 'static')],
    compress: true,
    historyApiFallback: true,
    port: 7600,
  },
};
