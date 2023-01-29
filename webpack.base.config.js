const path = require('path');

module.exports = {
    module: {
        rules: [
            // typescript
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            // css (style loader在前 css loader在后)
            {
                test:/\.css$/,
                use: [ 'style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            // .node native
            {
                test: /\.node$/,
                exclude: /node_modules/,
                use: 'node-loader' // node-loader处理.node文件，用于处理C++模块
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.node'],
        alias: {
            '~native': path.resolve(__dirname, 'native'),
            '~resources': path.resolve(__dirname, 'resources')
        }
    },
    devtool: 'source-map',
};