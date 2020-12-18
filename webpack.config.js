const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require ('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin =require('terser-webpack-plugin');

const optimization = () => {

return 
    {
        splitChunks: {
            chunks: 'all';
    
        }
    };


};
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
optimization: optimization(),
plugins: [
    new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './src/index.html'), // шаблон
        filename: 'index.html',
        minify:{
        collapseWhitespace: true,

        } 
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
new CopyPlugin({
    patterns: [
        { from: path.resolve(__dirname, 'src/file_type_favicon_icon_130608.ico'),to: path.resolve( __dirname, 'dist' )
    },
    ]
}),
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
                    publicPath: path.resolve(__dirname, 'dist') 
                },
             },
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