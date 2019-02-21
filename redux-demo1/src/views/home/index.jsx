import React, { Component } from 'react';

import { withRouter,NavLink} from 'react-router-dom';

class View extends Component {
    render() {
        return (
            <div className="home">
               home
               <NavLink to="/">home</NavLink>
               <NavLink to="/test">test</NavLink>
            </div>
        )
    }
}
export default View;
