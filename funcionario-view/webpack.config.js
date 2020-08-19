const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

let plugins = [];

plugins.push(new extractTextPlugin("styles.css"));

plugins.push(
    new webpack.ProvidePlugin({
        '$' : 'jquery/dist/jquery.js',
        'jQuery' : 'jquery/dist/jquery.js'
    })
);

if (process.env.NODE_ENV === 'production') {

    plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

    plugins.push(new optimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            discardComments: {
                removeAll: true
            }
        },
        canPrint: true
    }));

}    

module.exports = {
    entry: {
        app: './app/ts/app.ts',
        vendor: ['jquery', 'bootstrap']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].chunk.bundle.js',
        publicPath: 'dist'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                chunks: 'initial',
                name: 'vendor',
                test: 'vendor',
                enforce: 'true'
            }
        },
        runtimeChunk: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
                
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            { 
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader' 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml' 
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    
    plugins

}