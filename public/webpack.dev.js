const merge = require("webpack-merge")
const base = require("./webpack.common.js")
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = merge(base, {
    mode: "development",

    devtool: 'eval-source-map',
    
    devServer: {
          static: './dist',   
    },

    plugins:[
        new HtmlWebpackPlugin({
          title : "Bar chart generator",
          template: "src/index.html"
        }),

        
     ],

})