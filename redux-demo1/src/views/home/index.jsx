import React, { Component } from 'react';

import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
// 导入需要的模块
@withRouter
@inject('otc')
@observer
class View extends Component {
    render() {
        console.log(this.props.otc)
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
