import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter} from 'react-router-dom';
import { Provider } from 'mobx-react';
import { observable, useStrict ,autorun} from 'mobx'
import App from './App.js';

import otcStore from './store/otc';
// const cnstore = new cnStore();
const stores = {
  otc: new otcStore(),
  // ...other stores
};

const Router = () => (
    <BrowserRouter>
        <Provider {...stores}>
            <App/>
        </Provider>
    </BrowserRouter>
)
export default Router;
