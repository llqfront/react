import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter} from 'react-router-dom';
import App from './App.js';

const Router = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
export default Router;
