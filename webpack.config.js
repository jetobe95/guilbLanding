const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const miniCss = require("mini-css-extract-plugin");

module.exports = {

    mode: 'development',

    resolve: {extensions:['.js','.jsx','.css']},

    entry: {app:['./src/app/index.js']},

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
                filename: 'index.html',
                template: './src/app/index.html'
            }),
        new miniCss({
            filename:"[name].css",
            chunkFilename:"[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'      
            },
            {
                test: /\.css$/,
                use:[
                    { loader: 'style-loader' },
                    { loader: miniCss.loader },
                    { loader: 'css-loader',
                        options: 
                        {
                          sourceMap: true,
                          modules: true,
                          localIdentName: "[local]___[hash:base64:5]"
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    { loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/'}
                    }
                ]
            },
            {   //Bootstrap !!!
                test: /\.(scss)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader',
                        options: {
                            plugins: ()=> require('autoprefixer')
                        }
                    },
                    {loader: 'sass-loader'}
                ]
            },
             //Fonts Awesome
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    }
};