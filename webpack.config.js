const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
entry:
{
    main: path.resolve(__dirname, './src/index.js'),
    analytics: path.resolve(__dirname, './src/analytics.js'),

},
output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js'
},
devServer:{
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
compress: true,
hot: true,
    overlay: true,
    port: 4200,
},
resolve: {
    extensions: ['.js', '.json', '.png'],
  
},
optimization: {
    splitChunks: {
        chunks: 'all',

    },
},
plugins: [
    new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './src/index.html'), // шаблон
        filename: 'index.html', // название выходного файла
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
        {
        from: path.resolve(__dirname, 'src/file_type_favicon_icon_130608.ico'),
        to: path.resolve(__dirname, 'dist')
        }
    ]),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css '
    }),
],
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
        {
            test: /\.css$/,
            use:[
                { loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: isDev,
                    reloadAll: true
                } },
                'css-loader'
            ],
        },
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff(2)?|eot|ttf|oft|svg)$/,
            type: 'asset/inline',

        },
        {
            test: /\.xml$/i,
            use: ['xml-loader'],
          },
    ], 
}
}