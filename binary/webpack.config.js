const path = require('path');
module.exports = {
   entry: './src/index.ts',
   mode: 'development',
   devtool: 'inline-source-map',
   watch: true,
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
   },
   resolve: {
      extensions: ['.ts', '.js'],
      symlinks: false,
   },
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
      ],
   },
};