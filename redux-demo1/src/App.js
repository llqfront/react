import React, { Component } from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import home from './views/home/';
import test from './views/test/';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/test" component={test} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
