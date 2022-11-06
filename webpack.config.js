const path = require('path')

module.exports = {
    entry: './src/app.ts',
    mode: 'production',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build'),
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
}