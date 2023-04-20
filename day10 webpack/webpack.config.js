const path = require('path');

module.exports = {
  entry: './lib/index.js',  // tell webpack which files as entry point to bundle everything
  mode: "development",

  output: {
    filename: 'main.js',  // bundle everything into file 'main.js'
    path: path.resolve(__dirname, 'dist'),
  },
  module: {  
    rules: [  // when we are using webpack to bundle our files, we have many "rules" to follow, rules is Array
      {
        test: /\.(?:js|mjs|cjs)$/,  // regex check file type with file extension
        exclude: /node_modules/,    // don't pack  node_modules
        use: {  // "use" below rules to pre-process files
          loader: 'babel-loader',  
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" },
              "@babel/preset-react",]
            ]
          }
        }
      }
    ]
  },

};