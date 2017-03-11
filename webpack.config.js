var webpack = require('webpack')

module.exports = {
    entry: [
        "./polyfill.js",
        "./index.js",
    ],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: '/dist/'
    },
    devServer: {
        host: '0.0.0.0',
        hot: true,
        inline: true,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                secure: false
            }
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style!css"
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000' 
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
}