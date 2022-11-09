const path = require('path')
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/App.ts',
    mode: 'production',
    output: {
        filename: 'App.js',
        path: path.resolve(__dirname, 'build/build'),
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },
    target: 'node',
    externals: [nodeExternals()],
    mode: 'development'
}