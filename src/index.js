import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how a u?', likeCount: 12 },
  { id: 2, message: "It\'s my first post", likeCount: 10 }
]

let dialogs = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Valera' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Tanya' },
  { id: 5, name: 'Anton' },
  { id: 6, name: 'Alexandr' }
]

let messages = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'how a u?' },
  { id: 3, message: 'yo' },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
