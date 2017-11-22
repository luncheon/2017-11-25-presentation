const ExtractTextPlugin             = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin             = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

const path = require('path')
const resolvePath = filename => path.resolve(__dirname, filename)

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolvePath('docs'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: { loader: 'css-loader', options: { import: false } }
        }),
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader'],
        }),
      },
      {
        test: /\.pug$/,
        use: { loader: 'pug-loader' },
      },
      {
        test: /\.(png|gif|jpg|eot|woff2?|ttf|svg)(\?.*)?$/,
        use: { loader: 'url-loader' },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.pug',
      inlineSource: '.(js|css)$',
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
}
