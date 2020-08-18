const path = require('path');

module.exports = {
    entry: './app/ts/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
                
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }

}

if (process.env.NODE_ENV == 'production') {

}    