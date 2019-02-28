import React, { Component } from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import lazyLoad from './lazyLoad';
import { Provider } from 'mobx-react';
// import { observable, useStrict ,autorun} from 'mobx'

import RootStore from './store/store.js';

const home = lazyLoad(() => import(/* webpackChunkName: "Home" */ './views/home/'));
const test = lazyLoad(() => import(/* webpackChunkName: "Test" */ './views/test/'));



class App extends Component {
  render() {
    return (
      <Provider {...RootStore}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/test" component={test} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
