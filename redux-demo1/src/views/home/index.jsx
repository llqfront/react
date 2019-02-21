import React, { Component } from 'react';

import { withRouter,NavLink} from 'react-router-dom';

class View extends Component {
    render() {
        return (
            <div className="home">
               home<br/>
               <NavLink to="/">home</NavLink><br/>
               <NavLink to="/test">test</NavLink>
            </div>
        )
    }
}
export default View;
