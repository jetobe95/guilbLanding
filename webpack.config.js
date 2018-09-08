const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const webpackInitConfig = {
    
    mode: 'development',
    
    resolve: {extensions: ['.js','.jsx']},
    
    entry: {app: ['./src/app/index.jsx']},
    
    output: 
    {
        path: path.join(__dirname, 'src/public'),
        filename: 'bundle.js'
    },
    
    plugins: 
    [
        new HTMLWebpackPlugin({
                filename: 'index.html', 
                template: './src/public/index.html'
        })
    ],
    
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: 
                        {
                          sourceMap: true,
                          modules: true,
                          localIdentName: "[local]___[hash:base64:5]"
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/'
                    },
                  },
                ],
            },
             //Bootstrap !!!
            {   
                test: /\.(scss)$/,
                use: [
                    // Adds CSS to the DOM by injecting a `<style>` tag
                    {   loader: 'style-loader'},
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    {   loader: 'css-loader'},
                    // Loader for webpack to process CSS with PostCSS
                    {   loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [require('autoprefixer')];
                            }
                        }
                    },
                    // Loads a SASS/SCSS file and compiles it to CSS
                    {   loader: 'sass-loader'}
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

module.exports = webpackInitConfig;