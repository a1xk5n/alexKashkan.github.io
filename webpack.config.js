
const path = require('path');
const Webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV;

const config = {
    entry: './scripts/main.js',
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.json', '.coffee']
    },
    devtool : NODE_ENV === 'production' ? '' : 'source-map' ,
    module: {
        loaders: [
          { 
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
              presets: ['es2015']
            }
          }
        ],
        resolve: {
          extensions: ['.js']
        }
      }
};

if (NODE_ENV === 'production') {
    config.plugins = [
        new Webpack.optimize.UglifyJsPlugin( {
            compress: {
                warnings: false
            }
        })
    ];
}


module.exports = config;