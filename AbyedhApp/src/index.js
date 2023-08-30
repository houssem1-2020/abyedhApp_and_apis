import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Check if the protocol is HTTP, and if so, redirect to HTTPS
if (window.location.protocol === 'http:' && process.env.NODE_ENV === 'production') {
  window.location.href = `https:${window.location.href.substring(window.location.protocol.length)}`;
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegistration.register();
reportWebVitals();

