var webpack = require('webpack')

module.exports = {
    entry: [
        "./index.js"
    ],
    output: {
        filename: "bundle.js",
        path: "dist/"
    },
    devServer: {
        host: '0.0.0.0',
        hot: true,
        inline: true,
        historyApiFallback: true
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
    ],
}