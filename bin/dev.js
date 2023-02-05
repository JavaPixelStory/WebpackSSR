const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodeMon = require('nodemon');
const path = require('path');

const compiller = webpack(webpackConfig);

compiller.run((err) => {
    if(err) {
        console.log('Compiled failed!!!!!!!-------', err)
    }
    console.log('Compiled OK --------')
    compiller.watch({}, (err) => {
        if(err) {
            console.log('Compiled failed!!!!!!!-------', err)
        }
        console.log('ReCompiled OK --------')
    })


    nodeMon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client'),
        ]
    })
});