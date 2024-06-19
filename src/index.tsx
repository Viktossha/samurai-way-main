import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {subscribe} from "./redux/state";
let rerenderEntireTree = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}

subscribe(rerenderEntireTree);
rerenderEntireTree();