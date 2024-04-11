import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: 'Hi, how are you', likesCounts: 15},
    {id: 2, message: 'It\'s my first post', likesCounts: 20},
]

let dialogs = [
    {id: 1, name: 'Varya'},
    {id: 2, name: 'Kristina'},
    {id: 3, name: 'Misha'},
    {id: 4, name: 'Alina'},
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'How are you'},
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);