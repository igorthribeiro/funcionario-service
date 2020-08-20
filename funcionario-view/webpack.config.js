const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const fontminPlugin = require('fontmin-webpack');
const purifyCSSPlugin = require('purifycss-webpack');
const globAll = require('glob-all');

let plugins = [];

plugins.push(new htmlWebpackPlugin({
    hash: true,
    minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true
    },
    filename: 'index.html',
    template: __dirname + '/main.html'
}))

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


plugins.push(new purifyCSSPlugin({
    paths: globAll.sync([
        path.join(__dirname, '*.html'),
        path.join(__dirname, 'app/*.ts'),
        path.join(__dirname, 'app/**/*.ts')
    ]),
    minimize: true,
    purifyOptions: {
        whitelist:[]
    }
}));

plugins.push(new fontminPlugin({    
    autodetect: true,
}));

module.exports = {
    entry: {
        app: './app/ts/app.ts',
        vendor: ['jquery', 'popper.js', 'bootstrap', '@fortawesome/fontawesome-free']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].chunk.bundle.js'
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
        runtimeChunk: false
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
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                      }
                    }
                  ]
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                      }
                    }
                  ]
             },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                      }
                    }
                  ]
             },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                      }
                    }
                  ]
             }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    
    plugins

}