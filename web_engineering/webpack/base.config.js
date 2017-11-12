 const path = require('path');
 const entry = require('./entry');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");
 module.exports = {
     entry:entry,
     output:{
         path:path.resolve(process.cwd(),"dist"),
         filename:"[name].js",
     },
     watch:true,
     context:path.resolve(process.cwd(),"src/app"),
     plugins:[
         new ExtractTextPlugin("styles.css"),
     ],
     module:{
         rules:[
             {
                 test:/\.js$/,
                 loader:'babel-loader',
             },
             {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader","sass-loader"]
                })
            },
            {
                test:/\.less$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader","less-loader"]
                })
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                loader: "file-loader?name=[name]_[sha512:hash:base64:7].[ext]"
            },
         ]
     }
 }