import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
// 导入需要的模块
@withRouter
@inject('otc')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.otc)
    }
    render() {
        return (
            <div className="home">
                home
                <NavLink to="/otc">otc</NavLink>
            </div>
        )
    }
}
export default Home;
