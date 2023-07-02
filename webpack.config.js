const path = require("path");

module.exports = {
  name: "Express server",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    roules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
};
