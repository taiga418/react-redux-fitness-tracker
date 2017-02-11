//const stylus_plugin = require('stylus_plugin')

module.exports = {
  entry: [
    './src/styles/index.styl',
    'webpack-dev-server/client?http://localhost:8080',
    './src/app.js',
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] }
      },
      {
       test: /\.styl$/,
       loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  devServer: {
    contentBase: './src'
  }
};
