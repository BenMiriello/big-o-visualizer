import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render(
  // <BrowserRouter basename={window.location.pathname || "/BenMiriello/big-o-visualizer"} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
