const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',  // tell webpack which files as entry point to bundle everything
  mode: "development",

  output: {
    filename: 'output.js',  // bundle everything into file 'main.js'
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  module: {  
    rules: [  // when we are using webpack to bundle our files, we have many "rules" to follow, rules is Array
      {
        test: /\.(?:js|mjs|cjs)$/,  // regex check file type with file extension
        exclude: /node_modules/,    // don't pack  node_modules
        use: {  // "use" below rules to pre-process files
          loader: 'babel-loader',  // we have babel-loader, so we don't need babel.config.json file. This part blow implement the same functionailty as babel.config.json
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }, 
              "@babel/preset-react",]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin(
    {
      title: 'My react app',
      template: "public/index.html"
    }
  )],
};

// Note:
// webpack don't understand jsx or style, so we have to provide some loaders (ex. "babel-loader", "style-loader", "css-loader" ) to let it understand how to handle those files. If you need handle pdf, you also need pdf loader.
// We have "plugins" to provide extra functionailties. Every time we run "npm run build", we can have distribution (abbr. dist) folder, inside that folder we will have '.html' file generated for us.
