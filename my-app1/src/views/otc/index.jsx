import React, { Component } from 'react';
import { withRouter,NavLink} from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="otc">
                otc
                <NavLink to="/">home</NavLink>
            </div>
        )
    }
}
export default Home;
