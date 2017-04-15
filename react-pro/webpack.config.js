// webpack.config.js
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
// var deps = [ 
//   'react/dist/react.min.js',
//   'react-router/dist/react-router.min.js',
//   'moment/min/moment.min.js'
// ];
module.exports = {
    entry: [
        'webpack/hot/dev-server',
        './dev/js/entry'
    ],
    output: {
        path: path.join(__dirname, 'bundle/'),
        filename: 'js/bundle.js',
        publicPath:"/bundle/"
    },
    // resolve: {
    //     alias: {
    //       'react': pathToReact
    //     }
    // },
    // resolve: {
    //     alias: {}
    // },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
              warnings: false,
            },
            output: {
                comments: false,  // remove all comments
            }
        }),
        new ExtractTextPlugin("css/index.css", {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
          "process.env": { 
             NODE_ENV: JSON.stringify("production") 
           }
        })
    ],
    module: {
        // noParse: [pathToReact],
        // noParse: [],
        loaders: [
            {  
              test: /\.jsx?$/,  
              exclude: /(node_modules|bower_components)/,  
              loader: 'babel', // 'babel-loader' is also a legal name to reference  
              query: {  
                presets: ['react', 'es2015']  
              }  
            } ,
            { //
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract("style-loader", 'css-loader!sass-loader')
            },
            {// less
              test: /\.less$/,
              loader: ExtractTextPlugin.extract("style-loader", 'css-loader!less-loader')
            },
            {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=css/i/[hash:8].[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        inline: false,
        contentBase: './',
        port: 8000,
        hot: false,
        progress: false,
        watch:false,
        histroyApiFallback : false,
        colors:true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
// deps.forEach(function (dep) {
//   var depPath = path.resolve(node_modules_dir, dep);
//   config.resolve.alias[dep.split(path.sep)[0]] = depPath;
//   config.module.noParse.push(depPath);
// });
// module.exports = config;











