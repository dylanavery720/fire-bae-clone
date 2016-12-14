const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react'] } },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\\.gif$/, loader: "url-loader" },
      { test: /\\.(ttf|eot|svg)$/, loader: "file-loader" },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
}