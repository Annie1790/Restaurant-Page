const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    //matches the file type to the required loaders
    rules: [
        {
            //regex that matches to any of these files
            test: /\.scss$/,
            use:
                //if webpack encounters these loaders, it process the scss into regular css
                [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
        },
    ],
},
};