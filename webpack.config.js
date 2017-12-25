const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app:'./src/index.js',
        print:'./src/print.js'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase: './dist',
        compress:true,
        port:9000
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules:[
            {
                test: /\.css/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.js$/,
                use: {
                    loader: 'babel-loader?cacheDirectory'
                },
                include: path.resolve(__dirname, 'src')
            }
        ]
    }
}