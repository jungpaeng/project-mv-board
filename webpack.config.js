const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const MODE = process.env.WEBPACK_ENV
const ENTRY_FILE = path.resolve(__dirname, 'assets', 'ts', 'main.ts')
const OUTPUT_DIR = path.join(__dirname, 'static')

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        // Include ts, tsx, and js files.
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextWebpackPlugin.extract([
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugin() {
                return [
                  autoprefixer({
                    browsers: 'cover 99.5%'
                  })
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css')
  ]
}

module.exports = config