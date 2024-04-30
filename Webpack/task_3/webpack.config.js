const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8564
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      filename: './public/index.html' //relative to root of the application
  }),
  ],
  entry: {
    all: ["./modules/header/header.js", "./modules/body/body.js", "./modules/footer/footer.js"],
    /* header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js' */
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        // add css-loader ========
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'image-webpack-loader',
          'babel-loader', // Usa babel-loader para procesar los archivos .js
        ]
      },
      {
        // add the file-loader =======
        test: /\.(gif|png|jpg|jpe?g|svg)$/i,
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