// const express = require('express')
// const ReactDOM = require('react-dom/server')
// const Header = require('../shared/Header')
import express from 'express';
import ReactDOM from 'react-dom/server';
import { Header } from '../shared/Header';
import { indexTempplate } from './indexTemplate';

const app = express();

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
    res.send(
    indexTempplate(ReactDOM.renderToString(Header()))
    )
})

app.listen(3000, () => {
    console.log("Server start on 3000")
});