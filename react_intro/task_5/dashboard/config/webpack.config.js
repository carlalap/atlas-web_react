const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },
  devServer: {
    hot: true,
    // static: path.resolve("./dist"),
    compress: true,
    port: 8564
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
  ],
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
              },
        }, 
        {
            // add css-loader ========
            test: /\.css$/i,
            use: [
            'style-loader',
            'css-loader',
            ]
        },
        {
            // add the file-loader =======
            test: /\.(gif|png|jpg|jpe?g|svg|ico)$/i,
            use: [
            "file-loader",
            {
                // add image-webpack-loader =====0
                loader: "image-webpack-loader",
                options: {
                    bypassOnDebug: true, // webpack@1.x
                    disable: true, // webpack@2.x and newer
                },
            },
            ],
        },
        ],
    },
};