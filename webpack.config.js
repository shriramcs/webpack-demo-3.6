const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

  module.exports = {
    entry: {
        'app': './src/app.ts'
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {   test: /\.(eot|woff|woff2|ttf|svg)(\?[\s\S]+)?$/,
                loader: 'url-loader?limit=1000&name=fonts/[name].[ext]'
            },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract(
                {
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                  })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project',
            template: './src/index.html'
        }),
        new ExtractTextPlugin("app.css"),
    ]
  };