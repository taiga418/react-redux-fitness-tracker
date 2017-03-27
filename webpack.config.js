const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
       loader: ExtractTextPlugin.extract({
         fallbackLoader: 'style-loader',
         loader: 'css-loader!stylus-loader'
       })
     },
     {
       test:  /\.css$/,
       loader: 'style-loader!css-loader',
     }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
  devServer: {
    contentBase: './src'
  },
  devtool: 'source-map'
};
