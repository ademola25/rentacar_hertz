import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux
import {Provider } from 'react-redux';
import { store } from './helpers';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
