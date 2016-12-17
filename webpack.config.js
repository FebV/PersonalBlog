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
        hot: true,
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
}