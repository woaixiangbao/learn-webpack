const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app:'./src/index.js',
        print:'./src/print.js'
    },
    devtool:'inline-source-map',
    resolve:{
        // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤，其中__dirname表示当前工作目录，也就是项目根目录
        modules:[path.resolve(__dirname, 'node_modules')]
    },
    devServer:{
        contentBase: './dist',
        compress:true,
        port:9009
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Output Management',
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name].bundle.js',   name就是入口文件的名字
        filename:'[chunkhash:8].bundle.js', //chunkhash就是生产一个hash，默认是20位
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
                // 只针对根目录下的src目录中的文件采用babel-loader
                include: path.resolve(__dirname, 'src')
            }
        ]
    }
}