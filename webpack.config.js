const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    overlay: true,
    open: true
},
plugins: [
    new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './src/template.html'), // шаблон
        filename: 'index.html', // название выходного файла
    }),
],
}