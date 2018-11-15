import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { withRouter,NavLink,Switch,Redirect,Route} from 'react-router-dom';
import home from './views/home/';
import otc from './views/otc/';
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }
    render() {
    // return this.props.children;
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={home} />
                <Route path="/otc" component={otc} />
            </Switch>

        </div>)
    }
}

export default hot(module)(App);
