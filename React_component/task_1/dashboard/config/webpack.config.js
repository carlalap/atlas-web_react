const path = require("path");

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('../dist'),
    publicPath: '/',
  },
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, '../dist'),
  },
    compress: true,
    // port: 8564
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './dist/index.html',
        filename: 'index.html',
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
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
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