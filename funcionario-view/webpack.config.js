const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
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

plugins.push(new miniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
}));

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
        another: ['jquery', 'popper.js', 'bootstrap', '@fortawesome/fontawesome-free']
    },
    output: {
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test:/[\\/]node_modules[\\/]/,                    
                },
                chunks: 'all',
            }
        },
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
                use: [
                    {
                      loader: miniCssExtractPlugin.loader,
                      options: {
                        publicPath: (resourcePath, context) => {
                          return path.relative(path.dirname(resourcePath), context) + '/';
                        },
                      },
                    },
                    'css-loader',
                ],
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