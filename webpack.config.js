const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        // test: /\.(js|jsx|tsx||ts)$/,
        // exclude: /(node_modules|bower_components)/,
        // loader: 'babel-loader',
        // options: { presets: ['@babel/env'] },
        test: /\.(t|j)sx?$/,
        loader: ['awesome-typescript-loader?module=es6'],
        exclude: [/node_modules/],
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.tsx', '.ts', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
