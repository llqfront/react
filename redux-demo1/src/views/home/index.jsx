import React, { Component } from 'react';

import {observer,inject} from 'mobx-react';
import { observable, useStrict ,autorun} from 'mobx'
import { withRouter,NavLink} from 'react-router-dom';
// 导入需要的模块
@withRouter
@inject('otc')
@observer
class View extends Component {
    @observable secondsPassed = 0
    componentWillMount() {
        setInterval(() => {
            this.secondsPassed++
        }, 1000)
    }

    render() {
        console.log(this.props.otc)
        console.log(this.props.otc.total)
        return (
            <div className="home">
               home<br/>
               { this.secondsPassed }
               <NavLink to="/">home</NavLink><br/>
               <NavLink to="/test">test</NavLink>
            </div>
        )
    }
}
export default View;
