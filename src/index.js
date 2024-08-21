import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Conponents/App/App';
import { Provider } from 'react-redux';
import store from './data/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>

);
