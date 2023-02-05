const path = require('path');
const nodeExt = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;


module.exports = {
    target: 'node',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]-[hash:base64:5]',
                                exportOnlyLocals: true,
                            },
                        }
                    },
                    "sass-loader",
                ]
            },
        ]
    },
    externals: [
        nodeExt()
    ],
    optimization: {
        minimize: false,
    },
}