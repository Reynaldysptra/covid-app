const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
     entry : './src/app.js',

     output : {
          path : path.resolve(__dirname, 'dist'),
          filename : 'bundle.js'
     },

     performance: { hints: false },

     // Module
     module : {
          rules : [
               {
                    test: /\.js$/,
                    enforce: 'pre',
                    use: ['source-map-loader'],
               },
               {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
               },
               {
                    test: /\.exec\.js$/,
                    use: ['script-loader']
               },     
               {
                    test: /\.html$/i,
                    loader: 'html-loader',
               },
               {
                    test: /\.(svg|png|gif|jpg|ico)$/,
                    loader: 'file-loader',
                    options: {
                      name: '[name][hash].[ext]',
                      outputPath : 'Img'
                    },
               },
          ]
     },

     plugins : [
          new HtmlWebpackPlugin({
               template: "./src/index.html",
               filename: "index.html",
               favicon : 'src/Img/Logo/logo.png'
          }),
          new HtmlWebpackPlugin({
               template: "./src/tentang.html",
               filename: "tentang.html",
               favicon : 'src/Img/Logo/logo.png'
          }),
          new copyPlugin({    
               patterns : [
                    {
                         from : path.resolve(__dirname, './src/Img'),
                         to : path.resolve(__dirname, './dist/Img')
                    }
               ]
          }),
     ],

      devServer : {
           contentBase : path.join(__dirname, 'dist'),
           compress : true,
           port : 3000,
           open : 'Google Chrome'
      }
}