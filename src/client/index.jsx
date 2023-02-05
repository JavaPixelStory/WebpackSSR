import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Header } from '../shared/Header';


window.addEventListener('load', () => {
    ReactDOM.hydrate(<Header />, document.getElementById('react-root'))
})

